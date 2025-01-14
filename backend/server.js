import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready");
})

console.log(process.env.MONGO_URI);

app.listen(5001, () => {
    console.log('Server started at http://localhost:5001');
});

