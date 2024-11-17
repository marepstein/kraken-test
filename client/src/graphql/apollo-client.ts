import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.SERVER_URL,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;