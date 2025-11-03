import express from "express"
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = process.env.PORT || 3030
app.listen(port, () => console.log(`app running on port: ${port}`));
app.get("/", (req, res) => {
    res.send(`app running on port ${port}`);
})