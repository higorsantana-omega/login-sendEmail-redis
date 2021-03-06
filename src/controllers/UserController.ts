import { Request, Response } from "express";
import passwordGenerator from 'password-generator'

import Queue from "../lib/Queue";

class UserController {
  async store(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body

    const user = {
      name,
      email,
      password: passwordGenerator(10, false)
    }

    await Queue.add('RegistrationMail', { user })

    res.json(user)
  }
}

export { UserController }