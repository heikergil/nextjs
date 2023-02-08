import { test, expect, Page } from '@playwright/test';

test.describe.serial('Home Page tests @homepage @smoke', async () => {
	test.beforeAll(async ({ browser, baseURL }) => {
		const context = await browser.newContext();
	});


	test('test', async ({}) => {
		expect(1).toBe(1)
	  });


});
