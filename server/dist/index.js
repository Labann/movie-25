import express from "express";
const app = express();
const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`app running on port: ${port}`));
app.get("/", (req, res) => {
    res.send(`app running on port ${port}`);
});
//# sourceMappingURL=index.js.map