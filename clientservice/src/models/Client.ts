import { prop, getModelForClass } from "@typegoose/typegoose";
import * as mongoose from "mongoose";

export class Client{
    @prop({ required: true, trim: true })
    name: string;
    @prop({ unique:true, required: true, trim: true })
    email: String;
    @prop({ required: true, trim: true })
    phonenumber: String
}


const ClientModel = getModelForClass(Client);

export default ClientModel;