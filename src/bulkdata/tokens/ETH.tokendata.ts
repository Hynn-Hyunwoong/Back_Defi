import { ITokenData } from './interface.tokendata';
import {
  ETHkrwclosePrice,
  ETHkrwopenPrice,
  ETHusdopenPrice,
  ETHusdclosePrice,
  dataLength,
} from './bulkdataRow';

export const ETHtokenData: ITokenData[] = dataLength.map((date, index) => ({
  name: 'ETH',
  date: date.toString().slice(0, 10),
  dailyOpenPriceKRW: ETHkrwopenPrice[index],
  dailyEndPriceKRW: ETHkrwclosePrice[index],
  dailyOpenPriceUSD: ETHusdopenPrice[index],
  dailyEndPriceUSD: ETHusdclosePrice[index],
  lastUppdateDate: new Date().toISOString().slice(0, 10),
}));
