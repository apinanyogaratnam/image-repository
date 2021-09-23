import express from 'express';
const router = express.Router();

import { getImages } from '../controllers/posts.js';
import Posts from '../models/posts';

router.get('/', getImages);

export default router;
