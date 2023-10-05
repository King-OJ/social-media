import { Router } from 'express';
import { followUser, getAllUsers, getCurrentUser, updateProfile } from '../controllers/userController.js';


const router = Router();

router.route("/allUsers").get(getAllUsers)
router.route("/current-user").get(getCurrentUser)
router.route("/update-profile").patch(updateProfile)
router.route("/follow-user/:id").get(followUser)
router.route("/profile/:id").get(getCurrentUser)

export default router