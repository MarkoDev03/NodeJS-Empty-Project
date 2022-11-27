import { Router } from "express";
import startRoutes from "../routes/start.routes";

const router = Router();

router.use("/start", startRoutes);

export default router;