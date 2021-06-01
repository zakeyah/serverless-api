'use strict'

const peopleSchema = require('./people-schema');

exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let persons; 
        if (id) {
            // get a specific record
            persons = await peopleSchema.query('id').eq(id).exec();
            persons = persons[0];

        } else {
            // get all records
            persons = await peopleSchema.scan().exec();
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(persons)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}