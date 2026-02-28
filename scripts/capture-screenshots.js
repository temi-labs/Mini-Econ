import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const base = 'http://localhost:3000';

  const targets = [
    { url: `${base}/`, path: 'src/assets/screenshots/real-home.png', width: 1200, height: 800 },
    { url: `${base}/products`, path: 'src/assets/screenshots/real-products.png', width: 1200, height: 900 }
  ];

  for (const t of targets) {
    try {
      await page.setViewport({ width: t.width, height: t.height });
      await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 60000 });
      // give time for animations to settle
      await new Promise((res) => setTimeout(res, 1200));
      await page.screenshot({ path: t.path, fullPage: false });
      console.log('Captured', t.path);
    } catch (err) {
      console.error('Failed to capture', t.url, err);
    }
  }

  await browser.close();
})();
