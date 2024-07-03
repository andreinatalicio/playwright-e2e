import { test, expect } from '@playwright/test';

import { HomePage } from '../../../support/pages/home/homePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
});

test.describe('Search', () => {
  test('search page visual regression test', async ({ page }) => {
    const searchTerm = 'Brasil';

    await homePage.open();
    await homePage.search(searchTerm);
    await expect(page).toHaveScreenshot();
  });
});
