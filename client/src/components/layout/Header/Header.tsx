import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
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
      <div>
        <Image src={"/images/basket.svg"} alt="Basket" width={30} height={30} />
      </div>
    </header>
  );
};
