import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js"
import dns from "dns";
import connectDB from "./src/config/db.js";

dns.setServers(['8.8.8.8', '8.8.4.4']);

connectDB()

app.listen(3000, () => {
    console.log("server is running on port 3000");

})