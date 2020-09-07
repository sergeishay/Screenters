
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk')
require('dotenv').config()

const { URL_KEY, URL_SEC } = process.env
// Set region
AWS.config.update({
    accessKeyId: URL_KEY,
    secretAccessKey: URL_SEC,
    region: "us-east-1",
});
function notification(number, artist, time) {
    // Create publish parameters
    // const numbers = ['+972523641163','+972528228640','+972549093350']
    // for(let number of numbers){
    var params = {
        Message: `${artist} Show Start at ${time} => www.screenters.com CrAZyAwSoMe LIVE SREAMING`,
        PhoneNumber: number,
        MessageAttributes: {
            "AWS.SNS.SMS.SenderID": {
                DataType: "String",
                StringValue: "Screenters"
            }
        }
    };

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
        function (data) {
            console.log("MessageID is " + data.MessageId);
        }).catch(
            function (err) {
                console.error(err, err.stack);
            });
}

// }
export default notification;
