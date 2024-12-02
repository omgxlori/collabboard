import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']; // Get the Authorization header
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secret = process.env.JWT_SECRET_KEY as string; // Get the secret key from environment variables
    const decoded = jwt.verify(token, secret) as JwtPayload; // Verify and decode the token
    req.user = decoded; // Attach the user data to the request object
    return next(); // Explicitly return after calling next()
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
