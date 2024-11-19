import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { TProduct } from "@/types/product";
import { findItemInCart, isClient } from "@/utils/helpers";

export interface ICartItem {
  product: TProduct;
  quantity: number;
}

export interface ICartProductsContextProps {
  addToCart: (product: TProduct, quantity: number) => void;
  removeFromCart: (product: TProduct) => void;
  clearCart: () => void;
  getCartTotal: () => { total: number; totalQuantity: number };
}

export const CartProductsContext = createContext<ICartProductsContextProps>({
  addToCart: () => [],
  removeFromCart: () => [],
  clearCart: () => [],
  getCartTotal: () => ({ total: 0, totalQuantity: 0 }),
});

export interface ICartProductsProviderProps {
  children: React.ReactNode;
}

export const CartProductsProvider = ({
  children,
}: ICartProductsProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    if (!isClient()) return;

    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse stored cart items:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (!isClient()) return;

    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems, isClient]);

  const addToCart = useCallback((product: TProduct, quantity: number) => {
    setCartItems((prevCartItems) => {
      const existingItem = findItemInCart(prevCartItems, product.id);

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }

      return [...prevCartItems, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((product: TProduct) => {
    setCartItems((prevCartItems) => {
      const existingItem = findItemInCart(prevCartItems, product.id);

      if (!existingItem) return prevCartItems;

      if (existingItem.quantity === 1) {
        return prevCartItems.filter(
          (cartItem) => cartItem.product.id !== product.id
        );
      }

      return prevCartItems.map((cartItem) =>
        cartItem.product.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    const total = cartItems.reduce(
      (total, item) => total + item?.product.price * item.quantity,
      0
    );

    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return { total, totalQuantity };
  }, [cartItems]);

  const value = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,
    }),
    [addToCart, removeFromCart, clearCart, getCartTotal]
  );

  return (
    <CartProductsContext.Provider value={value}>
      {children}
    </CartProductsContext.Provider>
  );
};
