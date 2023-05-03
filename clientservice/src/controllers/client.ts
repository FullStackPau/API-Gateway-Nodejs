import { Request, Response, NextFunction } from "express";
import { createClient, deleteClientById, getClientById, getClientList, updateClient } from "../services/client";

export const getClientListController = async (req: Request, res:Response, next:NextFunction) => {
    try{
        const list = await getClientList();
        return res.status(200).json({
            error: false,
            data: list
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Getting Client List"
        });
    }
}
export const getClientByIdController = async (req: Request, res:Response, next:NextFunction) => {
    try{
        const client = await getClientById(req.params.id);
        return res.status(200).json({
            error: false,
            data: client
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Getting Client By Id"
        });
    }
}

export const createClientController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { name, email, phonenumber } = req.body; 
        const client = await createClient(name, email, phonenumber);
        return res.status(200).json({
            error: false,
            data: client
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: true,
            message: "Error Creating Client"
        });
    }
}

export const updateClientController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;
        const client = await updateClient(id, req.body);
        return res.status(200).json({
            error: false,
            data: client
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Updating Client"
        });
    }
}
export const deleteClientByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;
        const client = await deleteClientById(id);
        return res.status(200).json({
            error: false,
            message: "Client Deleted"
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Error Deleting Client"
        });
    }
}