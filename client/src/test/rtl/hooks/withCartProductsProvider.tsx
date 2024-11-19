/* eslint-disable react/display-name */
import { CartProductsProvider } from "@/providers/CartProducts";
import { FC } from "react";

export const withCartProductsProvider = (WrappedComponent: FC): FC => {
  return (props) => {
    return (
      <CartProductsProvider>
        <WrappedComponent {...props} />
      </CartProductsProvider>
    );
  };
};
