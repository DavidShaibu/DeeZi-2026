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
      JSON.stringify(["Our Story", "Where to Stay", "Registry", "Contact Us"]),
  await assert(
    JSON.stringify(links) ===
      JSON.stringify(["Our Story", "Where to Stay", "Registry", "Contact Us"]),
    `menu has four tabs: ${links.join(", ")}`,
  );
  const tabLinks = await page.locator('[data-testid="tab-bar"] a').allTextContents();
  await assert(
    JSON.stringify(tabLinks) ===
      JSON.stringify(["Our Story", "Where to Stay", "Registry", "Contact Us"]),
    `horizontal tab bar has four tabs: ${tabLinks.join(", ")}`,
  );

  await page.getByRole("link", { name: "Registry" }).click();
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
  await assert(
    (await page.getByText("Navy Federal").count()) >= 1,
    "registry lists Navy Federal",
  );
  await assert(
    (await page.getByText("7226546765").count()) >= 1,
    "registry shows the account number",
  );
  await assert(
    (await page.getByText("256074974").count()) >= 1,
    "registry shows the routing number",
  );
  await assert(
    (await page.getByText("8172333219").count()) >= 1,
    "registry shows the Zelle number",
  );

  await page.getByTestId("open-menu").click();
  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.waitForURL("**/contact");
  await assert(
    (await page.getByRole("heading", { name: "Wedding Coordinator" }).count()) ===
      1,
    "contact lists the wedding coordinator",
  );
  await assert(
    (await page.getByText("Chidalu Mozie (Chief Bridesmaid)").count()) >= 1,
    "contact lists Chidalu Mozie as chief bridesmaid",
  );
  await assert(
    (await page.getByRole("link", { name: "+1 832 941-8841" }).count()) === 1,
    "contact lists Chidalu’s number",
  );
  await assert(
    (await page.getByRole("heading", { name: "Family Representative" }).count()) ===
      1,
    "contact lists the family representative",
  );
  await assert(
    (await page.getByText("Grace Shaibu (Groom's Family)").count()) >= 1,
    "contact lists Grace Shaibu for the groom’s family",
  );
  await assert(
    (await page.getByRole("link", { name: "+234 802 321 6384" }).count()) === 1,
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
  const mapHref = await page.getByRole("link", { name: "View on Map" }).first().getAttribute("href");
  await assert(
    Boolean(mapHref?.includes("Huntsville") && mapHref?.includes("Ravenwood")),
    `view on map points at Huntsville TX: ${mapHref}`,
  );

  console.log("All smoke tests passed.");
} finally {
  await browser.close();
}
