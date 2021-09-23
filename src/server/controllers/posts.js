import Post from '../models/Post.js';

export const getImages = async (req, res) => {
    try {
        const images = await Post.find();
        res.json(images);
    }
    catch (error) {
        res.json({ message: error});
    }
};
