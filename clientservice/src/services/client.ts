import ClientModel, { Client } from "../models/Client";

export const getClientList = async (): Promise<Client[]> => {
    return await ClientModel.find().exec();
}
export const getClientById = async (id: String): Promise<Client | null> => {
    return await ClientModel.findById(id).exec();
}
export const createClient = async (name: String, email: String, phonenumber: Number): Promise<Client> => {
    return await ClientModel.create({
        name,
        email,
        phonenumber
    });
}
export const updateClient = async (id: String, client: Client): Promise<Client | null> => {
    return await ClientModel.findByIdAndUpdate(id, client, { new: true}).exec();
}
export const deleteClientById = async (id: String): Promise<Client | null> => {
    return await ClientModel.findByIdAndDelete(id).exec();
}