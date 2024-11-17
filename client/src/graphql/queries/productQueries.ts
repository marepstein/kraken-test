import { gql } from "@apollo/client";

export const getAllProducts = gql`
  {
    query
    getAllProducts {
      allProducts {
        id
        name
        power
        description
        price
        quantity
        weight
        height
        width
        length
      }
    }
  }
`;

export const getProductById = gql`
  query getProductById($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      weight
      height
      width
      length
    }
  }
`;
