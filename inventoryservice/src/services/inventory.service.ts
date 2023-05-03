import ProductModel, { Product } from "../models/Inventory";

export const getInventory = async (): Promise<Product[]> => {
    return await ProductModel.find().exec();
}
export const getProductById = async (id: String): Promise<Product | null> => {
    return await ProductModel.findById(id).exec();
}
export const newProduct = async (name: String, stock: Number, description: String): Promise<Product> => {
    return await ProductModel.create({
        name,
        stock,
        description
    });
}
export const updateProduct = async (id: String, product:Product):Promise<Product | null> => {
    return await ProductModel.findByIdAndUpdate(id, product, { new: true });
}

export const deleteProductById = async (id: String):Promise<Product | null> => {
    return await ProductModel.findByIdAndDelete(id);
}