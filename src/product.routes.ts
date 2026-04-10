import { Router } from "express";
import * as ProductController from "./product.controller.js";

const router = Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", ProductController.create);
router.patch("/:id", ProductController.update);
router.delete("/:id", ProductController.remove);

export default router;
