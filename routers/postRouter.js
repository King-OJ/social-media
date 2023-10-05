import { Router } from 'express';
import { createPost, deletePost, editPost, sharePost, getAllPosts, getFriendsPosts } from '../controllers/postController.js';

const router = Router();

router.route("/").get(getAllPosts).post(createPost)
router.route("/friends").get(getFriendsPosts)
router.route("/:id").patch(editPost).delete(deletePost).post(sharePost)

export default router