import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import Post from '../models/PostModel.js'
import User from '../models/UserModel.js';

export const createPost = async (req, res)=> {
    req.body.postedBy = req.user.userId;
    const createdPost = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({ post: createdPost})
}

export const editPost = async (req, res)=> {
    const { id } = req.params
    const editedPost = await Post.findByIdAndUpdate(id, req.body, {
        new: true
    })
    if(!editedPost) {
        throw new NotFoundError(`there is no post with id : ${id}`)
    }
    res.status(StatusCodes.OK).json({ post: editedPost });
}

export const deletePost = async (req, res)=> {
    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)

    if(!deletedPost) {
        throw new NotFoundError(`there is no post with id : ${id}`)
    }
    res.send("delete post");
}

export const sharePost = async (req, res)=> {
    const { id } = req.params
    const post = await Post.findById(id)
    res.send("share post");
}

export const getUserPosts = async (req, res)=> {
    const posts = await Post.find({ createdBy: req.params.id })

    if(!posts) {
        throw new BadRequestError(`Invalid posts requests`)
    }

    res.status(StatusCodes.OK).json({ posts })
}

export const getFriendsPosts = async (req, res)=> {
    const posts = await Post.find({ createdBy: req.user.userId })

    if(!posts) {
        throw new BadRequestError(`Invalid posts requests`)
    }

    res.status(StatusCodes.OK).json({ posts })
}

export const getAllPosts = async (req, res)=> {
    let posts
    if(req.user.role == "admin") {
        posts = await Post.find({})
        .populate('postedBy', '-friends')
        .sort('-createdAt')
    }
    else {
        const user = await User.find({_id: req.user.userId})

        posts = await Post.find({ $or: [ 
            { postedBy : { $eq: req.user.userId } },
            { "postedBy": { 
                $in: user[0].friends
            }}
         ] })
        
        .populate('postedBy', '-friends')
        .sort('-createdAt')

    }
    

    if(!posts) {
        throw new BadRequestError(`Invalid posts requests`)
    }

    res.status(StatusCodes.OK).json({ posts })
}