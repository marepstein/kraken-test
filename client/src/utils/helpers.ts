import { ICartItem } from "@/providers/CartProducts/CartProducts";

export const formatPrice = (price: number) => {
  return `£${(price / 100).toFixed(2)}`;
};

export const findItemInCart = (cartItems: ICartItem[], productId: string) => {
  console.log("find item", cartItems);

  return cartItems.find((item) => item.product.id === productId);
};
