import { test, expect, Page } from '@playwright/test';

test.describe.serial('Home Page tests @homepage @smoke', async () => {


	let page: Page
	test.beforeAll(async ({ browser, baseURL }) => {
		const context = await browser.newContext();
		page = await context.newPage()
		await page.goto('/')
	});


	test('test', async ({}) => {
	expect(1).toBe(1)
	  });


});
