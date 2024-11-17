import { Asset } from "@/components/common/Asset/Asset";
import { Button } from "@/components/common/Button";
import { QuantityCounter } from "@/components/common/QuantityCounter";
import { useCart } from "@/hooks/useCart";
import { TProduct } from "@/types/product";
import { formatPrice } from "@/utils/helpers";
import { FC, useContext, useState } from "react";

interface IProductInfoWithATCProps {
  product: TProduct;
}

export const ProductInfoWithATC: FC<IProductInfoWithATCProps> = ({
  product,
}) => {
  const [userQuantity, setUserQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const { addToCart, getCartTotal } = useCart();

  const { price, name, quantity, power } = product;

  return (
    <div className="p-6 flex flex-col md:flex-row w-full">
      {/* Product Image */}
      <div className="rounded-lg h-full w-full md:max-h-96 md:max-w-96">
        <Asset
          src="/images/philips-plumen.jpg"
          alt="Phillips Plumen"
          placeholder="blur"
          blurDataURL="/images/philips-plumen.jpg"
          width={400}
          height={400}
          layout="responsive"
          className="rounded-lg aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col md:justify-end md:w-full md:p-6">
        {/* Product Details */}
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-4xl">{name}</h1>
          <p className="text-purpleHaze">{power} // Packet of 4</p>
        </div>

        {/* Price and Quantity Control */}
        <div className="flex flex-col justify-between items-center gap-4 mt-4">
          <div className="flex justify-between w-full items-end">
            <p className="text-2xl">{formatPrice(price)}</p>
            <QuantityCounter
              maxQuantity={quantity}
              setQuantity={setUserQuantity}
              quantity={userQuantity}
            />
          </div>
          <Button
            disabled={userQuantity === 0 || userQuantity > quantity || disabled}
            onClick={() => {
              addToCart(product, userQuantity);
              getCartTotal();
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
