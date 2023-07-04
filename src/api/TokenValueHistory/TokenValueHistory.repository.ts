import { TokenValue } from "../../models/tokenValue.model";

export class TokenValueRepository{
    async findAllTokenValue(name: string):Promise<TokenValue[] | null>{
        return await TokenValue.findAll({ where : {name : name}})
    }

    async findTokenValueByDate(name: string, date: string):Promise<TokenValue | null>{
        return await TokenValue.findOne({ where : {name : name, date : date}})
    }
    
}