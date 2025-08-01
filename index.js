import { Builder, By } from "selenium-webdriver";

(async () => {
  const driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("https://baidu.com");

    // const element = await driver.findElement(By.id("sb_form_q"));
    // await element.sendKeys("WebDriver");
    // await element.submit();

    await driver.sleep(1000);
    let title = await driver.getTitle();
    console.log({ title });
    const source = await driver.getPageSource();
    console.log({ source });
    const htmlelements = await driver.findElements(By.css("html"));
    const text = await htmlelements[0].getText();
    console.log({ text });

    const html = await htmlelements[0].getAttribute("innerHTML");

    console.log({ html: html });
  } finally {
    await driver.quit();
  }
})().then(console.log, console.error);
