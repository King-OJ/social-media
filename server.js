import express from "express";
import 'express-async-errors';
import morgan from "morgan";
import * as dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

//to display requests routes in console while app is in development
if(process.env.NODE_ENV) {
    app.use(morgan('dev'));
}
import { authenticateUser } from "./middlewares/authMiddleware.js";
import authRouter from './routers/authRouter.js';
app.use("/api/v1/auth", authRouter);

import userRouter from './routers/userRouter.js';
app.use("/api/v1/users", authenticateUser, userRouter);

import postRouter from './routers/postRouter.js';
app.use("/api/v1/post", authenticateUser, postRouter);


app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
  });

import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const startServer = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(5100, ()=> {
            console.log('server running....');
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

startServer()
