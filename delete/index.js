'use strict';

const people = require('./people-schema');


exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
          let deletedItem = await people.delete({id});
        return {
            statusCode: 200,
            body: JSON.stringify(deletedItem)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}