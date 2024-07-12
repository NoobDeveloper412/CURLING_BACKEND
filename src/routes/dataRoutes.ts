import express from 'express';
import { uploadData } from '../controllers/dataController';
import authenticate from '../middlewares/authenticate';

const router = express.Router();

router.post('/upload', authenticate, uploadData);

export default router;
