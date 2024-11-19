import { FC, useEffect } from "react";

import { useCounter } from "@/components/common/QuantityCounter/hooks/useCounter/useCounter";
import { Button } from "../Button";

export interface IQuantityCounterProps {
  maxQuantity: number;
  onQuantityChange?: (quantity: number) => void;
}

export const QuantityCounter: FC<IQuantityCounterProps> = ({
  maxQuantity,
  onQuantityChange,
}) => {
  const { quantity, increment, decrement } = useCounter(maxQuantity);

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  return (
    <div className="flex flex-col">
      <span className="text-center">Qty</span>
      <div className="flex flex-row gap-3">
        <Button
          onClick={decrement}
          className="max-w-4 max-h-4"
          disabled={quantity === 1}
        >
          -
        </Button>
        <span title="Current quantity">{quantity}</span>
        <Button
          onClick={increment}
          className="max-w-4 max-h-4"
          disabled={quantity >= maxQuantity}
        >
          +
        </Button>
      </div>
    </div>
  );
};
