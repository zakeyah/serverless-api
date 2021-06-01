const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phonNum: Number
});
console.log('from schema')
module.exports = dynamoose.model('people', peopleSchema);