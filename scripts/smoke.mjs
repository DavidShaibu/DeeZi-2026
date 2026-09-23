import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:43180";

function expectedCountdownLabel() {
  const now = new Date();
  const wedding = new Date("2026-10-09T16:00:00+01:00");
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const weddingDay = Date.UTC(
    wedding.getFullYear(),
    wedding.getMonth(),
    wedding.getDate(),
  );
  const days = Math.round((weddingDay - today) / 86_400_000);
  if (days > 1) {
    return `${days} DAYS`;
  }
  if (days === 1) {
    return "1 DAY";
  }
  if (days === 0) {
    return "TODAY";
  }
  return "CELEBRATED";
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

async function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
  console.log(`ok  ${message}`);
}

try {
  await page.goto(base, { waitUntil: "networkidle" });
  await assert(
    (await page.getByText("We first met at Toastmasters").count()) >= 1,
    "our story includes the Toastmasters meeting",
  );
  await assert(
    (await page.locator('img[alt="Zikora & David"]').count()) === 1,
    "our story shows the couple portrait",
  );
  await assert(
    (await page.getByTestId("story-chapter-photos").locator("img").count()) ===
      1,
    "our story breaks with one chapter photo",
  );
  await assert(
    (await page.getByText("I asked her to be my girlfriend.").count()) >= 1,
    "story includes asking her to be his girlfriend",
  );
  await assert(
    (await page.getByText("Chief Toaster").count()) >= 1,
    "story ends with Chief Toaster",
  );
  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").waitFor({ state: "visible" });
  const links = await page.locator('[data-testid="site-menu"] a').allTextContents();
  await assert(
    JSON.stringify(links) ===
      JSON.stringify([
        "Our Story",
        "Schedule",
        "Where to Stay",
        "Registry",
        "RSVP",
        "Contact Us",
      ]),
    `menu has six tabs: ${links.join(", ")}`,
  );
  const tabLinks = await page.locator('[data-testid="tab-bar"] a').allTextContents();
  await assert(
    JSON.stringify(tabLinks) ===
      JSON.stringify([
        "Our Story",
        "Schedule",
        "Where to Stay",
        "Registry",
        "RSVP",
        "Contact Us",
      ]),
    `horizontal tab bar has six tabs: ${tabLinks.join(", ")}`,
  );
  await page.getByTestId("close-menu").click();

  await page.getByTestId("tab-bar").getByRole("link", { name: "Schedule" }).click();
  await page.waitForURL("**/schedule");
  await assert(
    (await page.getByRole("heading", { name: "Schedule" }).count()) === 1,
    "schedule heading visible",
  );
  await assert(
    (await page.getByText("Event takes place in:").count()) >= 1,
    "schedule shows the countdown",
  );
  await page.getByTestId("countdown-value").waitFor();
  await assert(
    (await page.getByTestId("countdown-value").textContent())?.trim() ===
      expectedCountdownLabel(),
    `schedule countdown matches today (${expectedCountdownLabel()})`,
  );
  await assert(
    (await page.locator('img[alt="St. Thomas Catholic Church"]').count()) === 1,
    "schedule shows the church photo",
  );
  await assert(
    (await page.getByRole("heading", { name: "Wedding Ceremony" }).count()) === 1,
    "schedule lists the wedding ceremony",
  );
  await assert(
    (await page.getByText("St. Thomas Catholic Church").count()) >= 1,
    "schedule lists St. Thomas Catholic Church",
  );
  await assert(
    (await page.getByText("1323 16th St").count()) >= 1,
    "schedule lists the church street",
  );
  await assert(
    (await page.getByTestId("schedule-ceremony").getByText("2:00 PM").count()) ===
      1,
    "ceremony is at 2:00 PM",
  );
  await assert(
    (await page.getByRole("heading", { name: "Reception" }).count()) === 1,
    "schedule lists the reception",
  );
  await assert(
    (await page.getByText("Sky Blue Event Hall").count()) >= 1,
    "schedule lists Sky Blue Event Hall",
  );
  await assert(
    (await page.getByText("2514 Sam Houston Ave, Suite F").count()) >= 1,
    "schedule lists the reception address",
  );
  await assert(
    (await page.getByTestId("schedule-reception").getByText("4:00 PM").count()) ===
      1,
    "reception is at 4:00 PM",
  );
  const ceremonyCal = await page
    .getByTestId("schedule-ceremony")
    .getByRole("link", { name: "Add to Calendar" })
    .getAttribute("href");
  await assert(
    Boolean(
      ceremonyCal?.includes("calendar.google.com") &&
        ceremonyCal?.includes("1323"),
    ),
    "ceremony calendar link includes the church",
  );
  const directionsHref = await page
    .getByTestId("schedule-ceremony")
    .getByRole("link", { name: "Directions" })
    .getAttribute("href");
  await assert(
    Boolean(
      directionsHref?.includes("16th") && directionsHref?.includes("Huntsville"),
    ),
    `ceremony directions point at the church: ${directionsHref}`,
  );

  await page.getByTestId("tab-bar").getByRole("link", { name: "Registry" }).click();
  await page.waitForURL("**/registry");
  await assert(
    (await page.getByText("Friday, October 9, 2026").count()) >= 1,
    "registry shows Friday, October 9, 2026",
  );
  await assert(
    (await page.getByTestId("registry-message").textContent())?.includes(
      "#DeeZi26",
    ),
    "registry uses the #DeeZi26 hashtag",
  );
  await assert(
    (await page.getByTestId("registry-message").textContent())?.includes(
      "cash gifts",
    ),
    "registry asks for cash gifts",
  );
  const usdText = await page.getByTestId("registry-bank").innerText();
  await assert(
    usdText.includes("Account Name: Chidalu Mozie"),
    "registry shows the USD account name",
  );
  await assert(
    usdText.includes("Zelle: 8172333219"),
    "registry shows the Zelle number",
  );
  await assert(
    !usdText.includes("Account Number") &&
      !usdText.includes("Routing Number") &&
      !usdText.includes("Navy Federal"),
    "registry USD block no longer lists bank account details",
  );
  const nairaText = await page.getByTestId("registry-naira").innerText();
  await assert(
    nairaText.includes("Account Name: Zikora Benedicta Mozie"),
    "registry shows the naira account name",
  );
  await assert(
    nairaText.includes("Account Number: 0478810470"),
    "registry shows the naira account number",
  );
  await assert(
    nairaText.includes("Bank: GTBank"),
    "registry lists GTBank for naira",
  );

  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").getByRole("link", { name: "RSVP", exact: true }).click();
  await page.waitForURL("**/rsvp");
  await assert(
    (await page.getByText("Event takes place in:").count()) >= 1,
    "rsvp shows the countdown",
  );
  await assert(
    (await page.getByText("Kindly fill out the short form by 25 September 2026").count()) >=
      1,
    "rsvp asks guests to reply by 25 September 2026",
  );
  const rsvpHref = await page.getByTestId("rsvp-form-link").getAttribute("href");
  await assert(
    Boolean(rsvpHref?.includes("docs.google.com/forms")),
    "rsvp page links to the Google Form",
  );

  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").getByRole("link", { name: "Contact Us" }).click();
  await page.waitForURL("**/contact");
  await assert(
    (await page.getByRole("heading", { name: "Chief Bridesmaid" }).count()) ===
      1,
    "contact lists the chief bridesmaid",
  );
  await assert(
    (await page.getByText("Chidalu Mozie", { exact: true }).count()) >= 1,
    "contact lists Chidalu Mozie",
  );
  await assert(
    (await page.getByRole("link", { name: "+1 203 410-8158" }).count()) === 1,
    "contact lists Chidalu’s number",
  );
  await assert(
    (await page.getByRole("heading", { name: "Family Representative" }).count()) ===
      1,
    "contact lists the family representative",
  );
  await assert(
    (await page.getByText("Grace Shaibu", { exact: true }).count()) >= 1,
    "contact lists Grace Shaibu",
  );
  await assert(
    (await page.getByRole("link", { name: "+234 902 848 7035" }).count()) === 1,
    "contact lists Grace Shaibu’s number",
  );

  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").getByRole("link", { name: "Where to Stay" }).click();
  await page.waitForURL("**/where-to-stay");
  await assert(
    (await page.getByRole("heading", { name: "Where to Stay" }).count()) === 1,
    "where to stay heading visible",
  );
  await assert(
    (await page.getByText("Fairfield Inn & Suites by Marriott").count()) >= 1,
    "fairfield hotel is listed",
  );
  await assert(
    (await page.getByText("Hampton Inn & Suites").count()) >= 1,
    "hampton hotel is listed",
  );
  await assert(
    (await page.getByText("Comfort Inn").count()) >= 1,
    "comfort inn is listed",
  );
  await assert(
    (await page.getByText("Huntsville Inn & Suites").count()) >= 1,
    "huntsville inn and suites is listed",
  );
  await assert(
    (await page.getByText("Home2 Suites by Hilton").count()) >= 1,
    "home2 suites is listed",
  );
  const mapHref = await page.getByRole("link", { name: "View on Map" }).first().getAttribute("href");
  await assert(
    Boolean(mapHref?.includes("Huntsville") && mapHref?.includes("Ravenwood")),
    `view on map points at Huntsville TX: ${mapHref}`,
  );

  console.log("All smoke tests passed.");
} finally {
  await browser.close();
}
