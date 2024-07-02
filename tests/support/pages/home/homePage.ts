import { Page } from '@playwright/test';

const WEBAPP_URL = process.env.WEBAPP_URL;

export class HomePage {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(`${WEBAPP_URL}`);
  }

  async search(searchTerm: string) {
    await this.page.locator('#searchInput').fill(searchTerm);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}
