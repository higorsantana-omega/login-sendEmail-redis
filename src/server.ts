import "dotenv/config";
import express from "express";
import BullBoard from 'bull-board';

import { UserController } from "./controllers/UserController";
import Queue from "./lib/Queue";

const app = express();
// BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json());
// app.use('/admin/queues', BullBoard.UI)

const userController = new UserController()

app.post('/users', userController.store)

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
