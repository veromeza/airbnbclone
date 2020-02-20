const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://airbnb:airbnb@api-proyectofinal-8osbm.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const mongo = mongoose.connection;

mongo.on ('error', error => console.log(error))
.once('open',() => console.log('Connected to database'))

const typeDefs = gql`

    type Query{
        prueba(name:String):String
    }
    
`

const resolvers = {
    Query:{
        prueba: (root,args,context,info) => `Hola Mundo ${args.name}`
    }
}

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) => {
    console.log(`Server ready set: ${url}`)
})