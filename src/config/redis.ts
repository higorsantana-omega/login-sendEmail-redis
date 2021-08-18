const redisConfig = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: '123'
}

export { redisConfig }