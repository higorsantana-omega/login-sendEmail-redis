import { nodeMailer } from "../lib/Email";

interface IUser {
  data: string
}

let registrationMail = {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }: IUser) {
    const { user } = data
    
    await nodeMailer.sendMail({
      from: 'Higor <higorcontato@teste.com.br>',
      to: `${user.name} ${user.email}`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo ao meu teste`
    })
  }
}

export { registrationMail }