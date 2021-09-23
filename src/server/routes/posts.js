import { getImages } from '../controllers/posts.js';
import Posts from '../models/Post';

import express from 'express';
const router = express.Router();

router.get('/', getImages);

export default router;
