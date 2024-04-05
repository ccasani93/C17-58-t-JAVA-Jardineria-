import { Link } from "@nextui-org/react";
import Image from "next/image.js";
import { CartIcon } from "../Icons/CartIcon.jsx";
import { UserIcon } from "../Icons/UserIcon.jsx";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center  w-[100%] p-8 bg-greenMain text-white`}
    >
      <div className="flex items-center gap-5 w-[100%] md:w-[100vh]">
        <Image src="/logoRinconverde.png" width={100} height={100} alt="logo" />
        <Search />
        <div className="flex gap-3">
          <CartIcon />
          <UserIcon />
        </div>
      </div>
      <div className="flex gap-3 mt-2">
        <Link href="#" className=" text-white">Inicio |</Link>
        <Link href="#" className="text-white">
          Productos |
        </Link>
        <Link href="#" className="text-white">Como comprar |</Link>
        <Link href="#" className="text-white">Contacto </Link>
      </div>
    </div>
  );
};
