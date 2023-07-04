import { Request, Response, NextFunction } from 'express'
import { getCoinPrice, getCoinCurrency } from './coinMarket.model'

export const getCoinPriceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const symbols = ['ETH', 'ARB', 'USDT']
    const resultUSD = await getCoinPrice(symbols, 'USD')
    const resultKRW = await getCoinPrice(symbols, 'KRW')
    res.json({
      USD: resultUSD.data,
      KRW: resultKRW.data,
    })

    console.log('result USD-ETH ',resultUSD.data.data.ETH.quote.USD.price)
  } catch (e) {
    console.log(
      `This error occurred getCoinPriceController from coinMarket.controller.ts. The Error message is ${e}`
    )
    res.status(500).json({ ErrorEvent: `${e}.message` })
  }
}

export const getCoinCurrencyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const symbols = ['ETH', 'ARB', 'USDT']
    const resultUSD = await getCoinPrice(symbols, 'USD')
    const resultKRW = await getCoinPrice(symbols, 'KRW')
    res.json({
      USD: resultUSD.data,
      KRW: resultKRW.data,
    })
  } catch (e) {
    console.log(
      `This error occurred getCoinCurrencyController from coinMarket.controller.ts. The Error message is ${e}`
    )
    res.status(500).json({ ErrorEvent: `${e}.message` })
  }
}


// console.log('result USD-ETH ',resultUSD.data.data.ETH.quote.USD.price)
// console.log('result KRW-ETH',resultKRW.data.data.ETH.quote.KRW.price)
// console.log('result USD-ARB', resultUSD.data.data.ARB.quote.USD.price)
// console.log('result KRW-ARB', resultKRW.data.data.ARB.quote.KRW.price)
// console.log('result USD-USDT', resultUSD.data.data.USDT.quote.USD.price)
// console.log('result KRW-USDT', resultKRW.data.data.USDT.quote.KRW.price)

    // console.log('result USD-ETH ',resultUSD.data.data.ETH.quote.USD.last_updated.toString().slice(0,10))
    // console.log('result KRW-ETH',resultKRW.data.data.ETH.quote.KRW.price)
    // console.log('result USD-ARB', resultUSD.data.data.ARB.quote.USD.price)
    // console.log('result KRW-ARB', resultKRW.data.data.ARB.quote.KRW.price)
    // console.log('result USD-USDT', resultUSD.data.data.USDT.quote.USD.price)
    // console.log('result KRW-USDT', resultKRW.data.data.USDT.quote.KRW.price)