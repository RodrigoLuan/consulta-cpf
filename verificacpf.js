const puppeteer = require('puppeteer');
 
verificacpf = async(cpf) => {
    const browser = await puppeteer.launch({
       // headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://www.situacao-cadastral.com/');
    await page.waitFor('input[name="doc"]')
    await page.type('input[name="doc"]', cpf, {delay: 185});
    await page.keyboard.press('Enter');
    await page.waitFor('#corpo > tbody > tr:nth-child(2) > td > span > a');
    await page.screenshot({path:`consultacCPF-${cpf}.png`});
    await browser.close();
}

module.exports = verificacpf;