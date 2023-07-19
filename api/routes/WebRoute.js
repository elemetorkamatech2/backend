import express from 'express';
import webControler from '../controller/WebController.js';

const router = express.Router();

router.get('/', webControler.getAll);
router.post('/', webControler.post);
router.get('/website/:userId', webControler.getUserWebsite);
router.get('/websitedate/:date',webControler.filterdate);
router.get('/websitememory/:memory',webControler.filtermemory);
export default router;
