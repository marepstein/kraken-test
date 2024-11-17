import { FC } from "react";

interface IProductDescriptionProps {
  description: string;
}

export const ProductDescription: FC<IProductDescriptionProps> = ({ description }) => {
  return (
    <div className="w-full bg-hemocyanin text-ice p-6 flex flex-col gap-4">
      <h2 className="text-ice text-3xl">Description</h2>
      {description}
    </div>
  );
}