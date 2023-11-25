import { Router } from "express";
import { IndexController } from "@Controllers/Index/index.controller";
const router = Router();

const controller = new IndexController();

router.get("/", controller.main);

export default router;
