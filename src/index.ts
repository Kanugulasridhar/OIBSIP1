import express from 'express';
import dotenv from "dotenv";
import { connectToMongoDB } from './db/conn';
import { generateAccessToken, generateRefreshToken, verifyAccessToken } from './helper/handleToken';
import { verify } from 'jsonwebtoken';
dotenv.config({path:'./config.env'});
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes")

connectToMongoDB();
app.use(express.json());

app.use("/api/user", userRoutes);


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!! test 2nd time');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
