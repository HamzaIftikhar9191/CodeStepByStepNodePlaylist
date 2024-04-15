///////This is the code for connecting to the database


const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';            //// Default url for mongoDB connection
const databaseName='e-com'                          //// database (e-com)
const client= new MongoClient(url);                 //// connect client to server

async function dbConnect()                          ////async is used to handle the promise
{
    let result = await client.connect();            ////await is also used to handle the promise
    db= result.db(databaseName);                    //eg database (e-com)
    return db.collection('products');              //eg collection (products)
}

module.exports =dbConnect;
