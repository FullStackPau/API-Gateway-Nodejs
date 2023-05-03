import express from "express";
import { getInventoryController, createProductController, updateProductController, deleteProductByIdController } from "../controllers/inventory";
import { validateProduct, isValidMongooseIdParam } from "../middlewares/inventory";
const inventory = express.Router();


inventory.get("/list", getInventoryController);
inventory.post("/product/new", validateProduct, createProductController);
inventory.put("/:id", isValidMongooseIdParam, validateProduct, updateProductController);
inventory.delete("/:id", isValidMongooseIdParam, deleteProductByIdController);
export default inventory;