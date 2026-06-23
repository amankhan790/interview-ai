import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import dns from "dns";
import connectDB from "./src/config/db.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
