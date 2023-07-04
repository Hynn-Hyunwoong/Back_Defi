import { ITokenData } from "./interface.tokendata";
import { USDTkrwclosePrice, USDTkrwopenPrice,USDTusdclosePrice,USDTusdopenPrice, dataLength } from "./bulkdataRow";

export const USDTtokenData : ITokenData[] = dataLength.map((date, index) => ({
    name : "USDT",
    date : date.toString().slice(0,10),
    dailyOpenPriceKRW: USDTkrwopenPrice[index],
    dailyEndPriceKRW: USDTkrwclosePrice[index],
    dailyOpenPriceUSD: USDTusdopenPrice[index],
    dailyEndPriceUSD: USDTusdclosePrice[index],
    lastUppdateDate: new Date().toISOString().slice(0,10)
}))
