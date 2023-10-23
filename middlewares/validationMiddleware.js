import { body, param, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import User from "../models/UserModel.js";

const withValidationErrors = ( validateValues )=> {
        return [
            validateValues,
            (req, res, next) => {
                const errors = validationResult(req);
                //if errors array is not empty
                if( !errors.isEmpty() ){
                    const errorMessages = errors.array().map((error) => error.msg);
                    throw new BadRequestError(errorMessages)
                }
                next();
            }
        ]
}

export const validateRegisterRequest = withValidationErrors([
    body("name")
        .notEmpty()
            .withMessage("name is required!")
        .isLength({ min: 3, max: 50 })
            .withMessage("name must be at least 3 characters long"),

    body("email")
        .notEmpty()
            .withMessage("email is required!")
        .isEmail()
            .withMessage("invalid email format")
        .custom(
            async ( email )=>{
                const user = await User.findOne({ email })
                if (user) {
                    throw new BadRequestError("email already exists")
                }
            }
        ),

    body("password")
        .notEmpty()
            .withMessage("password is required!")
        .isLength({ min: 5 })
            .withMessage("password must be at least 5 characters long")
])

export const validateLoginRequest = withValidationErrors([
    body("email")
        .notEmpty()
            .withMessage("email is required!")
        .isEmail()
            .withMessage("invalid email format") ,
    body("password")
        .notEmpty()
            .withMessage("password is required!"),
])

export const validateUpdateUserRequest = withValidationErrors([
    body("name")
        .notEmpty()
            .withMessage("name cannot be empty!"),
    body("email")
        .notEmpty()
            .withMessage("email cannot be empty!")
        .isEmail()
            .withMessage("invalid email format")
        .custom(
            async(email, { req })=> {
                const user = await User.findOne({ email });
                if (user && user._id.toString() !== req.user.userId) {
                    throw new BadRequestError('email already in use');
                }
            }
        )
        ,body('job').notEmpty().withMessage('job is required'),
        body('location').notEmpty().withMessage('location is required'),
])