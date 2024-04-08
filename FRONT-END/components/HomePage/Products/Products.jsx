import React from "react";
import { ArrowRighIcon } from "../../Icons/ArrowRightIcon";


export const Products = () => {
  return (
    <section className="flex flex-col items-center mt-9 md:flex md:flex-row md:gap-2 md:w-[100%] md:flex-center md:items-center md:justify-center md:mt-[5rem] md:mb-[3rem]">
      <div className="w-[100px] h-[100px] rounded-[50%] md:flex md:justify-center md:items-center md:rounded-[50%] mb-10 md:w-[130px] md:h-[100px] lg:w-[180px] lg:h-[180px]  bg-slate-400"></div>
      <ArrowRighIcon className="hidden md:flex md:place-items-center md:justify-center" />
      <div className="w-[100px] h-[100px] rounded-[50%] md:rounded-[50%] mb-10 md:w-[130px] md:h-[100px] lg:w-[180px] lg:h-[180px]  bg-slate-400"></div>

      <ArrowRighIcon className="hidden md:block" />
      <div className="w-[100px] h-[100px] rounded-[50%] md:rounded-[50%] mb-10 md:w-[130px] md:h-[100px] lg:w-[180px] lg:h-[180px]  bg-slate-400"></div>

      <ArrowRighIcon className="hidden md:block" />
      <div className="w-[100px] h-[100px] rounded-[50%] md:rounded-[50%] mb-10 md:w-[130px] md:h-[100px] lg:w-[180px] lg:h-[180px]  bg-slate-400"></div>
    </section>
  );
};
