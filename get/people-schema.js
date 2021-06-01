const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phonNum: Number
});

module.exports = dynamoose.model('people', peopleSchema);