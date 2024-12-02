import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();
// Public routes
router.use('/auth', authRoutes);
// Protected routes: Add authentication middleware to /api routes
router.use('/api', authenticateToken, apiRoutes);
export default router;
