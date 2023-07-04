import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import { router as awsRouter } from '../api/aws/aws.route';
import { router as coinMarketRouter } from '../api/coinMarket/coinMarket.route';
import { router as tokenValueRouter } from '../api/TokenValueHistory/TokenValueHistory.route';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Unavailable');
});
router.use('/aws', awsRouter);
router.use('/coinMarket', coinMarketRouter);
router.use('/token', tokenValueRouter);

export default router;
