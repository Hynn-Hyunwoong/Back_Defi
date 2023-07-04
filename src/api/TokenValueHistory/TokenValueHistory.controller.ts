import { Request, Response, NextFunction } from 'express';
import { TokenValueService } from './TokenValueHistory.service';

export class TokenValueController {
  constructor(private tokenValueService: TokenValueService) {}

  async findByTokenName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params;
    try {
      const tokenValue = await this.tokenValueService.findByTokenName(name);
      res.status(200).json(tokenValue);
    } catch (e) {
      next(e);
    }
  }

  async findByTokenNameAndDate(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { name, date } = req.params;
    try {
      const tokenValue = await this.tokenValueService.findByTokenNameAndDate(
        name,
        date,
      );
      res.status(200).json(tokenValue);
    } catch (e) {
      next(e);
    }
  }
}
