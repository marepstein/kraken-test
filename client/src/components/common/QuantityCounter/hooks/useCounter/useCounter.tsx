import { useCallback, useState } from "react";

export const useCounter = (maxQuantity: number) => {
  const [quantity, setQuantity] = useState(1);

  const increment = useCallback(() => {
    setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
  }, [maxQuantity]);

  const decrement = useCallback(() => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 1));
  }, []);

  return {
    quantity,
    increment,
    decrement,
    setQuantity,
  };
};
