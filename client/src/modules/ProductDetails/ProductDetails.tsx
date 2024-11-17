import { FC } from "react";

import { ProductDescription } from "@/components/common/ProductDetails/ProductDescription/ProductDescription";
import { ProductInfoWithATC } from "@/components/common/ProductDetails/ProductInfoWithATC";
import { ProductSpec } from "@/components/common/ProductDetails/ProductSpec/ProductSpec";
import { TProduct } from "@/types/product";

interface IProductDetailsProps {
  product: TProduct;
}

export const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {
  const { description, height, length, weight, width } = product;

  return (
    <div className="flex flex-col items-center">
      <ProductInfoWithATC product={product} />
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
