import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import createApolloClient from "@/graphql/apollo-client";
import { CartProductsProvider } from "@/providers/CartProducts";
import { Layout } from "@/components/layout/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <CartProductsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProductsProvider>
    </ApolloProvider>
  );
}

export default MyApp;
