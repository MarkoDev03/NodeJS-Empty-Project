import { Router } from "express";
import { index } from "../controllers/start.controller";

const router = Router();

router.route("/").get(index);

export default router;