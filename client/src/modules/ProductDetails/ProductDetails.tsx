import { FC, useCallback, useEffect, useState } from "react";

import { ProductDescription } from "@/components/common/ProductDetails/ProductDescription/ProductDescription";
import { ProductInfoWithATC } from "@/components/common/ProductDetails/ProductInfoWithATC";
import { ProductSpec } from "@/components/common/ProductDetails/ProductSpec/ProductSpec";
import { useCart } from "@/hooks/useCart";
import { TProduct } from "@/types/product";

interface IProductDetailsProps {
  product: TProduct;
}

export const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {
  const [userATCQuantity, setUserATCQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const { addToCart, getCartTotal } = useCart();

  const {
    price,
    name,
    quantity,
    power,
    description,
    height,
    length,
    weight,
    width,
  } = product;

  const handleAddToCart = useCallback(() => {
    if (userATCQuantity === 0 || userATCQuantity > quantity) return;

    addToCart(product, userATCQuantity);
    getCartTotal();
  }, [addToCart, getCartTotal, product, quantity, userATCQuantity]);

  const onQuantityChange = useCallback(
    (quantity: number) => {
      setUserATCQuantity(quantity);
    },
    [setUserATCQuantity]
  );

  useEffect(() => {
    if (userATCQuantity === 0 || userATCQuantity > quantity) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [userATCQuantity, quantity]);

  return (
    <div className="flex flex-col items-center">
      <ProductInfoWithATC
        name={name}
        price={price}
        quantity={quantity}
        power={power}
        handleAddToCart={handleAddToCart}
        onQuantityChange={onQuantityChange}
        disabled={disabled}
      />
      <ProductDescription description={description} />
      <ProductSpec
        height={height}
        length={length}
        weight={weight}
        width={width}
      />
    </div>
  );
};
