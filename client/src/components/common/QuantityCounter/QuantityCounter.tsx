import React, { FC, useState } from "react";
import { Button } from "../Button";

interface IQuantityCounterProps {
  maxQuantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}

export const QuantityCounter: FC<IQuantityCounterProps> = ({
  maxQuantity,
  setQuantity,
  quantity,
}) => {
  const increment = () => {
    setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col">
      <span className="text-center">Qty</span>
      <div className="flex flex-row gap-3">
        <Button
          onClick={decrement}
          className="max-w-4 max-h-4"
          disabled={quantity === 0}
        >
          -
        </Button>
        <span className="">{quantity}</span>
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
