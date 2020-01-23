var kafkaService = require('../services/pub.service');

exports.publishMessage = (requestBody) => {

    return new Promise((resolve,reject) => {

        try{

            console.log(requestBody)
            console.log("--dave--")
            successModel.data= requestBody;
            kafkaService.sendMessageToKafkaTopic(requestBody).then(res => {
                resolve(res);
            });

        }
        catch (e){
            
            reject(e);

        }
    })

}
