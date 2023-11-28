import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from 'express';

// Extend the Request type to include a user property
interface AuthenticatedRequest extends Request {
  user?: "userData"; // Adjust the type based on your User model
}

//protectRouteFunction to protect routes from non authenticated users
const protectRoute = async (req:AuthenticatedRequest, res:Response, next:NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        //seperate token and bearer token
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS!);

      req.user = "userData";
      next();
    } catch (err:any) {
      res
        .status(401)
        .send({ error: err.message, message: "Not authorzied , token failed" });
    }
  }
  if (!token) {
    res.status(401).send("Not authorzied , no token");
  }
};

module.exports = protectRoute;