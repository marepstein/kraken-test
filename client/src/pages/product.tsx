import createApolloClient from "@/graphql/apollo-client";
import { getProductById } from "@/graphql/queries";
import { ProductDetails } from "@/modules/ProductDetails";
import { TProduct } from "@/types/product";
import { ApolloError } from "@apollo/client";

interface IProductPageProps {
  product: TProduct;
  loading?: boolean;
  error?: ApolloError;
}

export default function Product({
  product,
  loading,
  error,
}: IProductPageProps) {
  console.log(product, error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ProductDetails product={product} />;
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;

  const client = createApolloClient();

  try {
    const { data, loading } = await client.query({
      query: getProductById,
      variables: { id },
    });

    return {
      props: {
        product: data.Product,
        loading,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        product: null,
        loading: false,
        error: error.message,
      },
    };
  }
}
