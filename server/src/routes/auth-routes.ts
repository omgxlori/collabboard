import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ where: { username } });

    // Handle invalid username
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare passwords
    const isValidPassword = await bcrypt.compare(password, user.password);

    // Handle invalid password
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { username: user.username, id: user.id },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "1h" }
    );

    // Return the token as JSON
    return res.json({ token });
  } catch (error) {
    console.error("Login error:", error);

    // Handle server error
    return res.status(500).json({ message: "Internal server error" });
  }
};


const router = Router();
router.post("/login", login);
export default router;
