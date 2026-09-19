import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:43180";

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
    (await page.getByText("Eventually.").count()) >= 1,
    "photos sit after she said yes",
  );
  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").waitFor({ state: "visible" });
  const links = await page.locator('[data-testid="site-menu"] a').allTextContents();
  await assert(
    JSON.stringify(links) ===
      JSON.stringify([
        "Our Story",
        "Where to Stay",
        "Registry",
        "RSVP",
        "Contact Us",
      ]),
    `menu has five tabs: ${links.join(", ")}`,
  );
  const tabLinks = await page.locator('[data-testid="tab-bar"] a').allTextContents();
  await assert(
    JSON.stringify(tabLinks) ===
      JSON.stringify([
        "Our Story",
        "Where to Stay",
        "Registry",
        "RSVP",
        "Contact Us",
      ]),
    `horizontal tab bar has five tabs: ${tabLinks.join(", ")}`,
  );
  await page.getByTestId("close-menu").click();

  await page.getByTestId("tab-bar").getByRole("link", { name: "Registry" }).click();
  await page.waitForURL("**/registry");
  await assert(
    (await page.getByText("Friday, October 9, 2026").count()) >= 1,
    "registry shows Friday, October 9, 2026",
  );
  await assert(
    (await page.getByTestId("registry-message").textContent())?.includes(
      "#DeeZi'26",
    ),
    "registry uses the #DeeZi'26 hashtag",
  );
  await assert(
    (await page.getByTestId("registry-message").textContent())?.includes(
      "CASH donations",
    ),
    "registry asks for cash donations",
  );
  const usdText = await page.getByTestId("registry-bank").innerText();
  await assert(
    usdText.includes("Account Name: Chidalu Mozie"),
    "registry shows the USD account name",
  );
  await assert(
    usdText.includes("Account Number: 7226546765"),
    "registry shows the USD account number",
  );
  await assert(
    usdText.includes("Routing Number: 256074974"),
    "registry shows the routing number",
  );
  await assert(
    usdText.includes("Bank: Navy Federal"),
    "registry lists Navy Federal as the USD bank",
  );
  await assert(
    usdText.includes("Zelle: 8172333219"),
    "registry shows the Zelle number",
  );
  await assert(
    /Bank: Navy Federal\n\s*\nZelle:/.test(usdText),
    "registry leaves one empty line before Zelle",
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
  await page.getByRole("link", { name: "Where to Stay" }).click();
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
