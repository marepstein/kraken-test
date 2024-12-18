import { Asset } from "@/components/common/Asset/Asset";
import { Button } from "@/components/common/Button";
import { QuantityCounter } from "@/components/common/QuantityCounter";
import { TProduct } from "@/types/product";
import { formatPrice } from "@/utils/helpers";
import { FC } from "react";

interface IProductInfoWithATCProps
  extends Pick<TProduct, "name" | "price" | "quantity" | "power"> {
  handleAddToCart: () => void;
  onQuantityChange?: (quantity: number) => void;
  disabled?: boolean;
}

export const ProductInfoWithATC: FC<IProductInfoWithATCProps> = ({
  name,
  price,
  quantity,
  power,
  handleAddToCart,
  onQuantityChange,
  disabled,
}) => {
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

      {/* Product Details */}
      <div className="flex flex-col md:justify-end md:w-full md:p-6">
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
              onQuantityChange={onQuantityChange}
            />
          </div>

          {/* Add to Cart */}
          <Button disabled={disabled} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
