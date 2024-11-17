import createApolloClient from '@/graphql/apollo-client';
import { getProductById } from '@/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createApolloClient();
  const { id } = req.query;

  try {
    const { data } = await client.query
    ({
      query: getProductById,
      variables: { id: id },
    });
    res.status(200).json(data);
  } catch (err) {
    throw err;
    // res.status(500).json({ message: 'Error fething data from GraphQL server' });
  }

};