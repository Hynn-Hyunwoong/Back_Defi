import { ITokenData } from "./interface.tokendata";
import { ASDkrwclosePrice,ASDkrwopenPrice,ASDusdopenPrice,ASDusdclosePrice,dataLength } from "./bulkdataRow";

export const ASDtokenData : ITokenData[] = dataLength.map((date, index) => ({
    name : "ASD",
    date : date.toString(),
    dailyOpenPriceKRW: ASDkrwopenPrice[index],
    dailyEndPriceKRW: ASDkrwclosePrice[index],
    dailyOpenPriceUSD: ASDusdopenPrice[index],
    dailyEndPriceUSD: ASDusdclosePrice[index],
    lastUppdateDate: new Date().toISOString().slice(0,10)
}))