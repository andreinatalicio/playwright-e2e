import { test, expect } from '@playwright/test';

import { HomePage } from '../../../support/pages/home/homePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
});

test.describe('Search', () => {
  test('search term successful', async ({ page }) => {
    const searchTerm = 'Brasil';

    await homePage.open();
    await homePage.search(searchTerm);

    await expect(page.locator('#searchform')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Brazil' })).toBeVisible();
    await expect(page.locator('.vector-column-start')).toBeVisible();
    await expect(page.locator('#content')).toBeVisible();
    await expect(page.locator('#vector-appearance')).toBeVisible();
    await expect(page.locator('#catlinks')).toBeVisible();
    await expect(page.locator('#footer')).toBeVisible();
  });
});
