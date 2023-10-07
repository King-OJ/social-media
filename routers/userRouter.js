import { Router } from 'express';
import { followUser, getAllUsers, getCurrentUser, getPeopleYouMayKnow, unfollowUser, updateProfile } from '../controllers/userController.js';


const router = Router();

router.route("/allUsers").get(getAllUsers)
router.route("/suggestedUsers").get(getPeopleYouMayKnow)
router.route("/current-user").get(getCurrentUser)
router.route("/update-profile").patch(updateProfile)
router.route("/follow-user/:id").patch(followUser)
router.route("/unfollow-user/:id").patch(unfollowUser)
router.route("/profile/:id").get(getCurrentUser)

export default router