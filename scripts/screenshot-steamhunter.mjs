import puppeteer from "puppeteer-core"

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  defaultViewport: { width: 1440, height: 900 },
})
const page = await browser.newPage()
await page.goto("https://steamhunter.app", { waitUntil: "networkidle0", timeout: 30000 })
await new Promise((r) => setTimeout(r, 3500))
await page.screenshot({ path: "/tmp/steamhunter.png", fullPage: false })
await browser.close()
console.log("done")
