import React from "react";
import { StarIcon } from "../../Icons/Star/StarIcon";

export const Reviews = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-5  bg-[yellowMain]">
      <h2 className="text-[50px]">Reseñas</h2>
      <div className="flex gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px]  border-1 bg-slate-400 rounded-[50%] text-center flex items-center justify-center mt-4 mb-4"></div>
          <span className="text-[20px] w-[100%] mb-5 text-start flex ">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>

          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px]  border-1 bg-slate-400 rounded-[50%] text-center flex items-center justify-center mt-4 mb-4"></div>
          <span className="text-[20px] w-[100%] mb-5 text-start flex ">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>

          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px]  border-1 bg-slate-400 rounded-[50%] text-center flex items-center justify-center mt-4 mb-4"></div>
          <span className="text-[20px] w-[100%] mb-5 text-start flex ">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
      </div>
    </section>
  );
};
