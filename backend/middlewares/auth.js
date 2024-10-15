import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/errorHandler.js";
import UserModel from "../src/user/models/user.schema.js";

export const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler(401, "login to access this route!"));
  }
  const decodedData = await jwt.verify(token, process.env.JWT_Secret);
  req.user = await UserModel.findById(decodedData.id);
  next();
};

// ["admin"]
// ["user"]
export const authByUserRole = (...roles) => {
  // fix this middleware for admin access only
  return async (req, res, next) => {
    if(roles.length > 1){
      //
    }
   if((roles.includes("admin") && req.user.role == "admin")|| (roles.includes("user"))){
      next();
   } else{
        return next(
        new ErrorHandler(
          403,
          `Role: ${req.user.role} is not allowed to access this resource`
        )
      );
   }
 };
};
