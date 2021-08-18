import "dotenv/config";
import express from "express";

import { UserController } from "./controllers/UserController";

const app = express();

app.use(express.json());

const userController = new UserController()

app.post('/users', userController.store)

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
