import { ICartItem } from "@/providers/CartProducts/CartProducts";

export const formatPrice = (price: number) => {
  return `£${(price / 100).toFixed(2)}`;
};

export const findItemInCart = (cartItems: ICartItem[], productId: string) => {
  return cartItems.find((item) => item.product.id === productId);
};

export const isClient = () => typeof window !== "undefined";
