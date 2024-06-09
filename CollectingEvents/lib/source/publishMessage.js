const topicName = 'projects/myproject/topics/logs';

const {PubSub} = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

/**
 * Publishes individual messages to a Pub/Sub topic
 * @param {Array} data - Array of message data
 */
async function publishMessage(data) {

    try {
        for (const d of data) {
            let dataBuffer = Buffer.from(JSON.stringify(d));
            (async () => {
                const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
                console.log(`Message ${messageId} published.`);
            })();
        }
    } catch (err) {
        console.error(`Received error while publishing: ${err.message}`);
        process.exitCode = 1;
    }
}

module.exports = { publishMessage };
