import express from 'express';
import webControler from '../controller/WebController.js';

const router = express.Router();

router.get('/website', webControler.getAll);
router.get('/website/:userId', webControler.getUserWebsite);

export default router;
