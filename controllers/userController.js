import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { BadRequestError } from "../errors/customErrors.js";

export const updateProfile = async (req, res)=> {
    const user = await User.findByIdAndUpdate(req.user.userId , req.body);
    res.status(StatusCodes.OK).json({ msg: 'user updated' });
}

export const getCurrentUser = async (req, res)=> {
    const user = await User.findOne({ _id: req.user.userId });
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


export const followUser = async (req, res)=> {
    const currentUser = await User.findByIdAndUpdate(req.user.userId, {
        $push: { friends: req.params }
    })
    const followedUser = await User.findByIdAndUpdate(req.params.id, {
        $push: { friends: req.user.userId }
    } )
    if(!currentUser || !followedUser) throw new BadRequestError(`No user with id: ${req.params} `)
    res.status(StatusCodes.OK).json({msg: "Your follow request was sent!"})
}
