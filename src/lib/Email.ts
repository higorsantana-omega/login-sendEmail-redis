import nodemailer from 'nodemailer'
import { mailConfig } from '../config/mail'

const nodeMailer = nodemailer.createTransport(mailConfig)

export { nodeMailer }