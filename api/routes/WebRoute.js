import express from 'express';
import webControler from '../controller/WebController.js';

const router = express.Router();

router.get('/', webControler.getAll);
router.post('/', webControler.post);
router.get('/website/:userId', webControler.getUserWebsite);

export default router;
