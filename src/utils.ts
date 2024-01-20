import { JSDOM } from 'jsdom';

export const getFundPrice = async (isin: string) => {
  try {
    const result = await fetch("https://markets.ft.com/data/funds/tearsheet/summary?s=GB00BJS8SJ34")
    const dom = new JSDOM(await result.text());
    const doc = dom.window.document;
    const quoteBox = doc.querySelector(".mod-tearsheet-overview__quote__bar");  
    if (quoteBox && quoteBox.children[0].children[1].textContent) {
      return Number.parseFloat(quoteBox.children[0].children[1].textContent)
    }   
    else 
    {
      throw new Error("Unable to find quote box")
    } 
  } catch (err) {
    throw new Error("Unable to find price for " + isin)
  }

}