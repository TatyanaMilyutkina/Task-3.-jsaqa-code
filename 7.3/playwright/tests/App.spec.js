const { test, expect, chromium } = require("@playwright/test");
const { user } = require("../user");

test("positive",async ( {page}) => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(user.password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await page.waitForURL("https://netology.ru/profile");
  await page.screenshot({ path: "screenshot.png" });
  const header = await page.locator("h2").first();
  await expect(header).toHaveText("Мои курсы и профессии");
  await browser.close();
});

test("negative",async ({page}) => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("123@mail.ru");
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("123");
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page.locator("data-testid=login-error-hint")).toContainText(
    "Вы ввели неправильно логин или пароль"
  );
  await page.screenshot({ path: "screenshotError.png" });
  await browser.close();
})
