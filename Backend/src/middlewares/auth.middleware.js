import jwt from "jsonwebtoken";
import tokenBlacklistModel from "../models/blacklist.model.js";

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      message: "Token not provided...",
    });
  }

  const isBlacklisted = await tokenBlacklistModel.findOne({ token });

  if (isBlacklisted) {
    return res.status(401).json({
      message: "Token is invalid...",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid token...",
    });
  }
}

export default {
  authUser,
};
