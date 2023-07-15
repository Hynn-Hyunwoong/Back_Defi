import express, { Request, Response, NextFunction } from 'express';
import { router as awsRouter } from '../api/aws/aws.route';
import { router as coinMarketRouter } from '../api/coinMarket/coinMarket.route';
import { router as tokenValueRouter } from '../api/TokenValueHistory/TokenValueHistory.route';
import { router as proposalRouter } from '../api/proposal/proposal.route';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Unavailable');
});
router.use('/aws', awsRouter);
router.use('/coinMarket', coinMarketRouter);
router.use('/token', tokenValueRouter);
router.use('/proposal', proposalRouter);

export default router;
