import { Router } from 'express';
import { createPost, deletePost, editPost, sharePost, getAllPosts, getUserPosts } from '../controllers/postController.js';

const router = Router();

router.route("/").get(getAllPosts).post(createPost)
router.route("/:id").get(getUserPosts)
router.route("/:id").patch(editPost).delete(deletePost).post(sharePost)

export default router