import { TokenValueRepository } from "./TokenValueHistory.repository";

export class TokenValueService{
    constructor(private tokenValueRepository: TokenValueRepository){}

    async findByTokenName(name: string){
        return await this.tokenValueRepository.findAllTokenValue(name);
    }

    async findByTokenNameAndDate(name: string, date: string){
        return await this.tokenValueRepository.findTokenValueByDate(name, date);
    }
}