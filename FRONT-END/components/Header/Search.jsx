import { Input } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";

export const Search = () => {
  return (
    <Input
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-[greenMain]",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-white dark:placeholder:text-[greenMain]",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Buscar..."
      startContent={
        <SearchIcon className=" mb-0.5 dark:text-[#114232] text-slate-400 pointer-events-none flex-shrink-0" />
      }
      className="w-[21.875rem] "
    />
  );
};
