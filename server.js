const schema = require('./schema')
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))