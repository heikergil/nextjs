import { test, expect, Page } from '@playwright/test';
import Homepage from '../../../page/homePage';

test.describe.serial('Home Page tests @homepage @smoke', async () => {
	let page: Page;
	let homepage: Homepage;
	test.beforeAll(async ({ browser, baseURL }) => {
		const context = await browser.newContext();
		page = await context.newPage();
		homepage = new Homepage(page, baseURL);
		await page.goto(homepage.localUrl, {waitUntil: 'load'} );
	});


	test('test', async ({}) => {
		const image = page.getByRole('img', { name: 'Next.js Logo' })
		const ctaText = page.getByText('Get started by editing pages/index.js')
		await expect(image).toBeVisible()
		await expect(ctaText).toBeVisible()
	  });


});
