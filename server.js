// server.js

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Create an Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/employee_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create an Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});



// Start the Apollo Server asynchronously and then apply middleware
server.start().then(() => {
  server.applyMiddleware({ app });
  
  // Start the Express server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
