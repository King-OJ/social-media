import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcryptjs';
import User from "../models/UserModel.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { comparePassword } from "../utilities/PasswordUtils.js";
import { attachCookies } from "../utilities/cookieUtils.js";
import { createJWT } from "../utilities/tokenUtils.js";

export const registerUser = async (req, res)=> {
    const isFirstAccount = (await User.countDocuments()) === 0;
    //make first registered account admin
    req.body.role = isFirstAccount ? "admin" : "user";

    //hash the password and update it on the req body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //finally create the user
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: "Account Created" });
}

export const loginUser = async (req, res)=> {
    const user = await User.findOne({ email : req.body.email })
    if (!user) throw new UnauthenticatedError('Invalid Credentials');

    const isValidUser = user && ( await comparePassword(req.body.password, user.password));

    if(!isValidUser) throw new UnauthenticatedError('Invalid Credentials');
    
    const token = createJWT({ userId: user._id, role: user.role });
    attachCookies(res, token);
    res.status(StatusCodes.OK).json({ msg: "Login Successful" });
}

export const logoutUser = async (req, res)=> {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
      });
      res.status(StatusCodes.OK).json({ msg: 'Logout Successful' });
}