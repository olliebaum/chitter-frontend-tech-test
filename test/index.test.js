import puppeteer from 'puppeteer';
let page;
let browser;
const fs = require('fs');
const path = require("path");

beforeAll(async () => {
 browser = await puppeteer.launch();
 page = await browser.newPage();
});

describe("Chitter index", () => {
  test("loads the page", async () => {
    await page.goto("file://" + fs.readFileSync(path.resolve(__dirname, "../src/index.html")));
  });
});

afterAll(() => {
 browser.close();
});
