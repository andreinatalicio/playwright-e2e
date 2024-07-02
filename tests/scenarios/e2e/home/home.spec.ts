import { test, expect } from '@playwright/test';

import { HomePage } from '../../../support/pages/home/homePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
});

test.describe('Home', () => {
  test('load home page successful', async ({ page }) => {
    await homePage.open();

    await expect(page).toHaveTitle('Wikipedia');
    await expect(page).toHaveURL('https://www.wikipedia.org/');
    await expect(page.locator('.central-textlogo__image')).toContainText(
      'Wikipedia',
    );
    await expect(page.locator('.localized-slogan')).toContainText(
      'The Free Encyclopedia',
    );
    await expect(page.getByLabel('Top languages')).toBeVisible();
    await expect(page.locator('#searchInput')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Read Wikipedia in your language' }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Google Play Store' }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Apple App Store' }),
    ).toBeVisible();
  });
});
