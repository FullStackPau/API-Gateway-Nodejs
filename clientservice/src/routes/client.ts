import express from "express";
import { createClientController, deleteClientByIdController, getClientByIdController, getClientListController, updateClientController } from "../controllers/client";
const client = express.Router();

client.get("/list", getClientListController);
client.get("/:id", getClientByIdController);
client.post("/new", createClientController);
client.put("/:id", updateClientController);
client.delete("/:id", deleteClientByIdController);



export default client;