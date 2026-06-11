import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js"
import dns from "dns";
import connectDB from "./src/config/db.js";
import invokeGeminiAi from "./src/services/ai.service.js";

dns.setServers(['8.8.8.8', '8.8.4.4']);

connectDB()
invokeGeminiAi()

app.listen(3000, () => {
    console.log("server is running on port 3000");

})