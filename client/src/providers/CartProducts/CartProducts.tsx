import { TProduct } from "@/types/product";
import { findItemInCart, formatPrice } from "@/utils/helpers";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface ICartItem {
  product: TProduct;
  quantity: number;
}

export interface ICartProductsContextProps {
  addToCart: (product: TProduct, quantity: number) => void;
  removeFromCart: (product: TProduct) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const CartProductsContext = createContext<ICartProductsContextProps>({
  addToCart: () => [],
  removeFromCart: () => [],
  clearCart: () => [],
  getCartTotal: () => 0,
});

export interface ICartProductsProviderProps {
  children: React.ReactNode;
}

export const CartProductsProvider = ({
  children,
}: ICartProductsProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

    console.log(cartItems);
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
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    const total = cartItems.reduce(
      (total, item) => total + item?.product.price * item.quantity,
      0
    );

    return total;
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
