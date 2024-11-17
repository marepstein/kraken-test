import {
  CartProductsContext,
  ICartProductsContextProps,
} from "@/providers/CartProducts";
import { useContext } from "react";

export const useCart = () =>
  useContext<ICartProductsContextProps>(CartProductsContext);
