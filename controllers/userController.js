import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { BadRequestError } from "../errors/customErrors.js";
import cloudinary from 'cloudinary';
import { formatImage } from "../middlewares/multerMiddleware.js";

export const updateProfile = async (req, res)=> {
    const newUser = { ...req.body };
    delete newUser.intent;
    if(req.file){
        const file = formatImage(req.file)
        const response = await cloudinary.v2.uploader.upload(file);
        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id;
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

    res.status(StatusCodes.OK).json({ msg: 'Profile Updated' });
}

export const getCurrentUser = async (req, res)=> {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
}

export const getUserProfile = async (req, res)=> {
    const user = await User.findOne({ _id: req.params.id })
    .populate('friends', '-password')
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
}

export const getAllUsers = async (req, res)=> {
    let users
    if(req.user.role == 'admin'){
        users = await User.find({_id : { $ne: req.user.userId} })
    }
    else {
        users = await User.find({ $and: [ {_id : { $ne: req.user.userId} }, { role: {$ne: "admin"} } ] }) 
    }
    const usersWithoutPassword = users.map((user)=>user.toJSON())
    res.status(StatusCodes.OK).json({ users: usersWithoutPassword });
}

export const getPeopleYouMayKnow = async (req, res)=> {
    const user = await User.find({_id: req.user.userId})
    let users
    if(req.user.role == 'admin'){
        users = await User.find({_id : { $ne: req.user.userId} })
    }
    else {
        users = await User.find({ $and: [ 
            {_id : { $ne: req.user.userId} }, 
            { role: {$ne: "admin"} }, 
            {"_id": { 
                $nin: user[0].friends
            }  } 
    ] }) 
    }
    const usersWithoutPassword = users.map((user)=>user.toJSON())
    res.status(StatusCodes.OK).json({ users: usersWithoutPassword });
}


export const followUser = async (req, res)=> {
    const currentUser = await User.findByIdAndUpdate(req.user.userId, {
        $push: { friends: req.params.id.toString() }
    })
    const followedUser = await User.findByIdAndUpdate(req.params.id , {
        $push: { friends: req.user.userId }
    } )
    if(!currentUser || !followedUser) throw new BadRequestError(`No user with id: ${req.params.id} `)
    res.status(StatusCodes.OK).json({msg: `You followed ${followedUser.name}`})
}

export const unfollowUser = async (req, res)=> {
    const currentUser = await User.findByIdAndUpdate(req.user.userId, {
        $pull: { friends: req.params.id.toString() }
    })
    const followedUser = await User.findByIdAndUpdate(req.params.id , {
        $pull: { friends: req.user.userId }
    } )
    if(!currentUser || !followedUser) throw new BadRequestError(`No user with id: ${req.params.id} `)
    res.status(StatusCodes.OK).json({msg: `You unfollowed ${followedUser.name}`})
}
