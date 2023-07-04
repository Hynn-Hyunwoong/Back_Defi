import cron from 'node-cron';
import { TokenValue } from '../../models/tokenValue.model';
import { getCoinPrice } from './coinMarket.model';
import {
  ASDkrwclosePrice,
  ASDkrwopenPrice,
  ASDusdclosePrice,
  ASDusdopenPrice,
  generateASDTokenPrice,
} from '../../bulkdata/tokens/bulkdataRow';

export const PriceUpdate = async () => {
  const timeZone = 'Asia/Seoul';
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
  const parts = formatter.formatToParts(new Date());
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;
  const today = `${year}-${month}-${day}`;

  // 23:59:59 일일 종가
  cron.schedule('59 59 23 * * *', async () => {
    const symbols = ['ETH', 'ARB', 'USDT'];
    const resultUSD = await getCoinPrice(symbols, 'USD');
    const resultKRW = await getCoinPrice(symbols, 'KRW');
    for (let symbol of symbols) {
      const [symbolRecord, created] = await TokenValue.findOrCreate({
        where: { name: symbol, date: today },
        defaults: {
          dailyOpenPriceUSD: 0,
          dailyOpenPriceKRW: 0,
          dailyEndPriceUSD: resultUSD.data.data[symbol].quote.USD.price,
          dailyEndPriceKRW: resultKRW.data.data[symbol].quote.KRW.price,
          lastUppdateDate: resultUSD.data.data[symbol].quote.USD.last_updated
            .toString()
            .slice(0, 10),
        },
      });

      if (!created) {
        symbolRecord.dailyEndPriceUSD =
          resultUSD.data.data[symbol].quote.USD.price;
        symbolRecord.dailyEndPriceKRW =
          resultKRW.data.data[symbol].quote.KRW.price;
        symbolRecord.lastUppdateDate = resultUSD.data.data[
          symbol
        ].quote.USD.last_updated
          .toString()
          .slice(0, 10);
        await symbolRecord.save();
      }
    }
  });
  // 00:00:04 일일 시가
  // API 호출 제한으로 인해 00:00:04에 호출
  cron.schedule('04 00 00 * * *', async () => {
    const symbols = ['ETH', 'ARB', 'USDT'];
    const resultUSD = await getCoinPrice(symbols, 'USD');
    const resultKRW = await getCoinPrice(symbols, 'KRW');
    for (let symbol of symbols) {
      const [symbolRecord, created] = await TokenValue.findOrCreate({
        where: { name: symbol, date: today },
        defaults: {
          dailyOpenPriceUSD: resultUSD.data.data[symbol].quote.USD.price,
          dailyOpenPriceKRW: resultKRW.data.data[symbol].quote.KRW.price,
          dailyEndPriceUSD: 0,
          dailyEndPriceKRW: 0,
          lastUppdateDate: resultUSD.data.data[symbol].quote.USD.last_updated
            .toString()
            .slice(0, 10),
        },
      });

      if (!created) {
        symbolRecord.dailyOpenPriceUSD =
          resultUSD.data.data[symbol].quote.USD.price;
        symbolRecord.dailyOpenPriceKRW =
          resultKRW.data.data[symbol].quote.KRW.price;
        symbolRecord.lastUppdateDate = resultUSD.data.data[
          symbol
        ].quote.USD.last_updated
          .toString()
          .slice(0, 10);
        await symbolRecord.save();
      }
    }
  });

  // ASD Token 가격 랜덤 업데이트 (1분마다)
  cron.schedule('*/1 * * * *', async () => {
    const symbol = 'ASD';
    const dailyOpenPriceKRW = generateASDTokenPrice(1250, 1450, 18);
    const dailyEndPriceKRW = generateASDTokenPrice(1250, 1450, 18);
    const dailyOpenPriceUSD = generateASDTokenPrice(1.1, 1.3, 18);
    const dailyEndPriceUSD = generateASDTokenPrice(1.1, 1.3, 18);

    // 가격 배열에 추가
    ASDkrwopenPrice.push(dailyOpenPriceKRW);
    ASDkrwclosePrice.push(dailyEndPriceKRW);
    ASDusdopenPrice.push(dailyOpenPriceUSD);
    ASDusdclosePrice.push(dailyEndPriceUSD);

    // DB에 추가
    const [tokenValue, created] = await TokenValue.findOrCreate({
      where: {
        name: symbol,
        date: today,
      },
      defaults: {
        dailyOpenPriceUSD: dailyOpenPriceUSD,
        dailyOpenPriceKRW: dailyOpenPriceKRW,
        dailyEndPriceUSD: dailyEndPriceUSD,
        dailyEndPriceKRW: dailyEndPriceKRW,
        lastUppdateDate: today,
      },
    });

    if (!created) {
      tokenValue.dailyOpenPriceUSD = dailyOpenPriceUSD;
      tokenValue.dailyOpenPriceKRW = dailyOpenPriceKRW;
      tokenValue.dailyEndPriceUSD = dailyEndPriceUSD;
      tokenValue.dailyEndPriceKRW = dailyEndPriceKRW;
      await tokenValue.save();
    }
  });
};
