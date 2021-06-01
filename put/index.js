'use strict';

const people = require('./people-schema');


exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
                const { name, phonNum } = JSON.parse(event.body);
          let updatedItem = await people.update({id},{name , phonNum});

    
        return {
            statusCode: 200,
            body: JSON.stringify(updatedItem)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}