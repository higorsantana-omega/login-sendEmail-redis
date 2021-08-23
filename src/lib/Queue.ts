import Queue from "bull";
import { redisConfig } from "../config/redis";
import * as jobs from '../jobs'

interface IAdd {
  name: any
  data: any
}

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  // options: job.options
}))

export default {
  queues,
  add(name: any, data: any) {
    const queue = this.queues.find((queue: any) => queue.name === name)
    return queue.bull.add(data)
  },
  process() {
    return this.queues.forEach((queue: any) => {
      queue.bull.process(queue.handle)
      queue.bull.on('failed', (job: any, err: any) => {
        console.log('Job failed', queue.key, job.data)
        console.log(err)
      })
    })
  }
}