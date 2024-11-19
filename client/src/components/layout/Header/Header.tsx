import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  const { getCartTotal, clearCart } = useCart();

  const { totalQuantity } = getCartTotal();

  return (
    <header className="text-ice px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src={"/images/octopus-logo.svg"}
          alt="Logo"
          width={200}
          height={50}
        />
      </Link>
      <div className="relative" onClick={clearCart} title="Basket items">
        {totalQuantity > 0 && (
          <span className="absolute bottom-0 text-ice z-10 right-[30px] text-md p-1">
            {totalQuantity}
          </span>
        )}
        <Image src={"/images/basket.svg"} alt="Basket" width={30} height={30} />
      </div>
    </header>
  );
};
