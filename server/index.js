const { ApolloServer, gql } = require('apollo-server');
const {importSchema} = require('graphql-import');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');


async function start () {

    const typeDefs = await importSchema(__dirname + '/schema.graphql');

    const MONGO_URI = "mongodb+srv://airbnb:airbnb@api-proyectofinal-8osbm.mongodb.net/test?retryWrites=true&w=majority"


    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    });
    
    const mongo = mongoose.connection;
    
    mongo.on ('error', error => console.log(error))
         .once('open',() => console.log('Connected to database'))
    
    const server = new ApolloServer({typeDefs,resolvers})
    
    server.listen().then(({url}) => {
        console.log(`Server ready set: ${url}`)
    })

};

start();