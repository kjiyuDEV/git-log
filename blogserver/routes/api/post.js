import express from 'express';

// Model
import Post from '../../models/post';
import auth from '../../middleware/auth';

const router = express.Router();

// api/post 조회
router.get('/', async (req, res) => {
    const postFindResult = await Post.find();
    console.log(postFindResult, 'All Post Get');
    res.json(postFindResult);
});

//인증(auth)된 유저만 작성 가능
router.post('/', auth, async (req, res, next) => {
    try {
        console.log(req, 'req');
        const { title, contents, fileUrl, creator } =
            req.body;
        const newPost = await Post.create({
            title,
            contents,
            fileUrl,
            creator,
        });
        res.json(newPost);
    } catch (e) {
        console.log(e);
    }
});

export default router;
