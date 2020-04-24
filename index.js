const puppeteer = require('puppeteer');
let cpfconsultado = '085.008.529-25'

const consultacpf = async (cpf)=>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://www.situacao-cadastral.com/');
    await page.waitFor('input[name="doc"]')
    await page.type('input[name="doc"]', cpf, {delay: 185});
    await page.keyboard.press.length('Enter');
    await page.screenshot({path:`consultacCPF-${cpf}.png`});
    await browser.close();
};

consultacpf(cpfconsultado);