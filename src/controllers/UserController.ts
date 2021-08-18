import { Request, Response } from "express";
import passwordGenerator from 'password-generator'

class UserController {
  async store(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body

    const user = {
      name,
      email,
      password: passwordGenerator(10, false)
    }

    res.status(201).json(user)
  }
}

export { UserController }