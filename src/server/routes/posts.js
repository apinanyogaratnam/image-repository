import express from 'express';
const router = express.Router();

import { getImages } from '../controllers/posts.js';
import Posts from '../models/Post';

router.get('/', getImages);

export default router;
