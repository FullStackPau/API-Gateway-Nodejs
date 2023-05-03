import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";


const startServer = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.NODE_ENV}`);
        app.listen(process.env.PORT, () => {
            console.log(`Server Started in PORT: ${process.env.PORT}`);
        });
    }catch(e){
        console.log(`Server Error Starting in PORT: ${process.env.PORT}`);
        console.log(e);
    }

}
startServer();