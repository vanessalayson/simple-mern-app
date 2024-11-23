import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// GET ROUTE
router.get("/", getProducts);

// POST ROUTE
router.post("/", createProduct);

// UPDATE ROUTE
router.put("/:id", updateProduct);

// DELETE ROUTE
router.delete("/:id", deleteProduct);

export default router;