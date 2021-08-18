import Queue from "bull";
import { redisConfig } from "../config/redis";
import * as jobs from '../jobs'

interface IAdd {
  name: string
  data: string
}

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, {
    redis: {
      host: '127.0.0.1',
      port: 6379,
      password: 'root'
    }
  }),
  name: job.key,
  handle: job.handle,
  options: job.options
}))

export default {
  queues,
  add({name, data}: IAdd) {
    const queue = this.queues.find((queue: { name: string; }) => queue.name === name)
    return queue.bull.add(data, queue.options)
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle)
      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data)
        console.log(err)
      })
    })
  }
}