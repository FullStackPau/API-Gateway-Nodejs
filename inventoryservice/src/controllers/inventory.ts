import express, { Request, Response, NextFunction } from "express";
import { getInventory, getProductById, newProduct, updateProduct, deleteProductById } from "../services/inventory.service";


export const getInventoryController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const inventory = await getInventory();
        return res.status(200).json({
            error: false,
            data: inventory
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: true,
            message: "Get Inventory Controller"
        });
    }
}
export const getProductByIdController = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const product = await getProductById(req.params.id);
        if(!product){
            return res.status(404).json({
                error: true,
                message: "Product not Found"
            });
        }
        return res.status(200).json({
            error: false,
            data: product
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: true,
            message: "Error Getting Product"
        });
    }
}

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { name, stock, description } = req.body;
        const product = await newProduct(name, stock, description);
        if(!product){
            throw new Error("Error Creating Product");
        }
        return res.status(200).json({
            error: false,
            message:"Product Created",
            data: product
        }); 
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Creating Product"
        });
    }
}

export const updateProductController = async (req: Request, res:Response, next: NextFunction) => {
    try{ 
        const product = await updateProduct(req.params.id, req.body);
        if(!product){
            return res.status(404).json({
                error: true,
                message: "Product not Found"
            });
        }
        return res.status(200).json({
            error: false,
            data:product,
            message: "Product Updated"
        });

    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: true,
            message: "Error Updating Product"
        });
    }
}
export const deleteProductByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const product = await deleteProductById(req.params.id);
        console.log(product);
        if(!product){
            return res.status(404).json({
                error: true,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            error: false,
            message: "Product Deleted"
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Deleting Product"
        });
    }
}