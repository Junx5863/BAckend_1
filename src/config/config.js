import dotenv from "dotenv";

dotenv.config();

const dataEnv = {
  port_back: process.env.PORT || 3000,
  port_db: process.env.PORT_DB || 27017,
  mongoURI: process.env.MONGO_URI || "127.0.0.1",
  DB_NAME: process.env.DB_NAME || "test",
  
};

export default dataEnv;