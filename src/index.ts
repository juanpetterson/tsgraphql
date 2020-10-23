import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { BookResolver } from './resolvers/BookResolver'; // add this
import { buildSchema } from 'type-graphql';

(async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver], // add this
  });
  const server = new ApolloServer({ schema });
  await server.listen(5000);
  console.log('Server has started!');
})();
