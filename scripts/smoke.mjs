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
  await page.getByTestId("open-menu").click();
  await page.getByTestId("site-menu").waitFor({ state: "visible" });
  const links = await page.locator('[data-testid="site-menu"] a').allTextContents();
  await assert(
    JSON.stringify(links) ===
      JSON.stringify(["Our Story", "Where to Stay", "Registry", "Contact Us"]),
    `menu has four tabs: ${links.join(", ")}`,
  );

  await page.getByRole("link", { name: "Registry" }).click();
  await page.waitForURL("**/registry");
  await page.getByTestId("contribute").first().click();
  await page.getByTestId("registry-thanks").waitFor({ state: "visible" });
  await assert(true, "registry contribute shows thank-you");

  await page.getByTestId("open-menu").click();
  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.waitForURL("**/contact");
  await page.getByLabel("Name").fill("Adaeze Okonkwo");
  await page.getByLabel("Email").fill("adaeze@example.com");
  await page.getByLabel("Message").fill("Cannot wait to celebrate in Lagos.");
  await page.getByTestId("contact-submit").click();
  await page.getByTestId("contact-thanks").waitFor({ state: "visible" });
  await assert(true, "contact form shows thank-you");

  await page.getByTestId("open-menu").click();
  await page.getByRole("link", { name: "Where to Stay" }).click();
  await page.waitForURL("**/where-to-stay");
  await assert(
    (await page.getByRole("heading", { name: "Where to Stay" }).count()) === 1,
    "where to stay heading visible",
  );

  console.log("All smoke tests passed.");
} finally {
  await browser.close();
}
