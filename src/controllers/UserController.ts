import { Request, Response } from "express";
import passwordGenerator from 'password-generator'

import { nodeMailer } from "../lib/Email";

class UserController {
  async store(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body

    const user = {
      name,
      email,
      password: passwordGenerator(10, false)
    }

    await nodeMailer.sendMail({
      from: 'Higor <higorcontato@teste.com.br>',
      to: `${name} ${email}`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${name}, bem-vindo ao meu teste`
    })

    res.status(201).json(user)
  }
}

export { UserController }