import { parse } from 'node-html-parser';

export const getFundPrice = async (isin: string) => {
  try {
    const result = await fetch("https://markets.ft.com/data/funds/tearsheet/summary?s=" + isin)
    const root = parse(await result.text())
    const rawPrice = root.querySelector(".mod-tearsheet-overview__quote__bar li span.mod-ui-data-list__value")
    if (rawPrice) {
      return Number.parseFloat(rawPrice.innerText)
    } else {
      throw new Error("Unable to find price for " + isin)
    }
  } catch (err) {
    throw new Error("Unable to find price for " + isin)
  }

}