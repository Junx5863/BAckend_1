import mongoose from "mongoose";
import config from "./config.js";

const mongoConnect = () =>{
    const mongoStringConnection = `mongodb://${config.mongoURI}:${config.port_db}/${config.DB_NAME}`;
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("open", () => console.log("Mongodb connection stablished"));
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}

export default {
    mongoConnect
}