import { Router } from 'express';
import { followUser, getAllUsers, getCurrentUser, getPeopleYouMayKnow, getUserProfile, unfollowUser, updateProfile } from '../controllers/userController.js';
import upload from '../middlewares/multerMiddleware.js';
import { validateUpdateUserRequest } from '../middlewares/validationMiddleware.js';

const router = Router();

router.route("/allUsers").get(getAllUsers)
router.route("/suggestedUsers").get(getPeopleYouMayKnow)
router.route("/current-user").get(getCurrentUser)
router.route("/update-profile").patch(
    upload.single('avatar') , 
    validateUpdateUserRequest, 
    updateProfile)
router.route("/follow-user/:id").patch(followUser)
router.route("/unfollow-user/:id").patch(unfollowUser)
router.route("/profile/:id").get(getUserProfile)

export default router