const { Kafka } = require('kafkajs')

async function sendMessage(data) {
    
    return new Promise((resolve, reject) => {

        try{

            var payload = JSON.stringify(data.message);
            var broker = data.broker;
            var kafkaTopic = data.topic;
            var clientId = data.clientId;
        
            const kafka = new Kafka({
                clientId: clientId,
                brokers: [broker]
              })
        
            const producer = kafka.producer()
            producer.connect()
            producer.send({
            topic: kafkaTopic,
            messages: [
                    { value: payload},
                ],
            })

            resolve(true);

        }
        catch (e){

            reject(e);
        
        }
    
        producer.disconnect()

    });

}

exports.sendMessageToKafkaTopic = sendMessage;
