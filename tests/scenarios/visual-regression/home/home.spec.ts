import { test, expect } from '@playwright/test';

import { HomePage } from '../../../support/pages/home/homePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
});

test.describe('Home', () => {
  test('home page visual regression test', async ({ page }) => {
    await homePage.open();
    await expect(page).toHaveScreenshot();
  });
});
