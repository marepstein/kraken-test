import { FC } from "react";
import Image, { ImageProps } from 'next/image';

interface IAssetProps extends Omit<ImageProps, 'className'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const Asset: FC<IAssetProps> = ({ src, alt, width, height, className, ...rest }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  )
}