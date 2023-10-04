import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Backend server running");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
