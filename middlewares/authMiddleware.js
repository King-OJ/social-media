import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utilities/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies
    
    if(!token){
        throw new UnauthenticatedError("authentication invalid")
    }

    try {
        const { userId, role } = verifyJWT(token)
        //attach userId and role to request object
        req.user = { userId, role }
        next()
    } catch (error) {
        throw new UnauthenticatedError("authentication invalid")
    }
    
  };