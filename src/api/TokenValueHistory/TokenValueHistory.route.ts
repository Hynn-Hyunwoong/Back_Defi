import express from 'express';
import { tokenValueController } from './TokenValueHistory.module';

export const router = express.Router();

router.get(
  '/tokenValue/:name',
  tokenValueController.findByTokenName.bind(tokenValueController),
);
router.get(
  '/tokenValue/:name/:date',
  tokenValueController.findByTokenNameAndDate.bind(tokenValueController),
);

export default router;
