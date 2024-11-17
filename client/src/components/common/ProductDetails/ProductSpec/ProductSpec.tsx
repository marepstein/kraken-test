import { FC } from "react";

interface IProductSpecProps {
  weight: number;
  width: number;
  height: number;
  length: number;
}

export const ProductSpec: FC<IProductSpecProps> = ({
  weight,
  width,
  height,
  length,
}) => {
  return (
    <div className="flex flex-col p-6 w-full gap-6">
      <h2 className="text-3xl">Specifications</h2>
      <div className="grid grid-cols-2 gap-y-4">
        <div className="text-lg">Brand</div>
        <div className="text-lg">Phillips</div>

        <div className="text-lg">Item weight (g)</div>
        <div className="text-lg">{weight}</div>

        <div className="text-lg">Dimensions (cm)</div>
        <div className="text-lg">
          {height} x {width} x {length}
        </div>

        <div className="text-lg">Item Model number</div>
        <div className="text-lg">E27 ES</div>

        <div className="text-lg">Colour</div>
        <div className="text-lg">Cool daylight</div>
      </div>
    </div>
  );
};
