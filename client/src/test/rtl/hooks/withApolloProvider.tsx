import { FC } from "react";

import createApolloClient from "@/graphql/apollo-client";
import { ApolloClient, ApolloProvider } from "@apollo/client";

export const withApolloProvider = (
  WrappedComponent: FC,
  client: ApolloClient<any> = createApolloClient()
): FC => {
  return (props) => {
    return (
      <ApolloProvider client={client}>
        <WrappedComponent {...props} />
      </ApolloProvider>
    );
  };
};
