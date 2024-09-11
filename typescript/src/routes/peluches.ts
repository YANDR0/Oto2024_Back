import { Router } from "express";
import PeluchesController from "../controllers/peluches.controller";
const router = Router();

router.get('', PeluchesController.getAll);

export default router; 