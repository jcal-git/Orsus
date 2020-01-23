const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

produce();

async function produce() {
const producer = kafka.producer()

await producer.connect()
await producer.send({
  topic: 'test-topic',
  messages: [
    { value: 'test 123' },
  ],
})

await producer.disconnect()
}
