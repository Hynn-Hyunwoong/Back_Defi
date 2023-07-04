import { ITokenData } from "./interface.tokendata";
import { ARBkrwclosePrice, ARBkrwopenPrice,ARBusdclosePrice,ARBusdopenPrice, dataLength } from "./bulkdataRow";

export const ARBtokenData : ITokenData[] = dataLength.map((date, index) => ({
    name : "ARB",
    date : date.toString(),
    dailyOpenPriceKRW: ARBkrwopenPrice[index],
    dailyEndPriceKRW: ARBkrwclosePrice[index],
    dailyOpenPriceUSD: ARBusdopenPrice[index],
    dailyEndPriceUSD: ARBusdclosePrice[index],
    lastUppdateDate: new Date().toISOString().slice(0,10)
}))
