'use strict'
const uuid = require('uuid').v4;
const People = require('./people-schema')

exports.handler = async (event) => {
    // code goes here
    try {
        const id = uuid();
        const {name, calories} = JSON.parse(event.body);
        let record = new People({id, name, calories});
        console.log('record-------->',record)
        let newRecord = await record.save();
        console.log('newRecord-------->',newRecord)
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        console.log('err ---------->',err)
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}