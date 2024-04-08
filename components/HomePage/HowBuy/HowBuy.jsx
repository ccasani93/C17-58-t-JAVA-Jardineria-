import React from "react";

export const HowBuy = () => {
  return (
    <section className="w-[100%] items-center flex flex-col justify-center">
      <h2 className="text-[50px] mb-6 font-normal">CÓMO COMPRAR</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center flex-col justify-center">
          <div className="w-[180px] h-[180px] bg-slate-400 rounded-[50%]"></div>
          <div className="w-[50px] h-[50px]  border-1 border-black rounded-[50%] text-center flex items-center justify-center mt-4 mb-4">
            1
          </div>
          <h2 className="text-[20px] mb-5">Elege tus productos</h2>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-[180px] h-[180px] bg-slate-400 rounded-[50%]"></div>
          <div className="w-[50px] h-[50px]  border-1 border-black rounded-[50%] text-center flex items-center justify-center mt-4 mb-4">
            2
          </div>
          <h2 className="text-[20px] mb-5">Realiza tu pedido</h2>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-[180px] h-[180px] bg-slate-400 rounded-[50%]"></div>
          <div className="w-[50px] h-[50px]  border-1 border-black rounded-[50%] text-center flex items-center justify-center mt-4 mb-4">
            3
          </div>
          <h2 className="text-[20px]">Nos contactamos con vos</h2>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-items-center mt-5">
        <div className="flex items-center flex-col justify-center">
          <div className="w-[180px] h-[180px] bg-slate-400 rounded-[50%]"></div>
          <div className="w-[50px] h-[50px]  border-1 border-black rounded-[50%] text-center flex items-center justify-center mt-4 mb-4">
            4
          </div>
          <h2 className="text-[20px] mb-5">
            Te enviamos fotosy videos del producto
          </h2>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda perspiciatis dolorum recusandae quasi quam molestias harum
            magnam. Ullam aperiam reprehenderit est explicabo tempora
            consectetur in ex sapiente architecto corrupti?
          </p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-[180px] h-[180px] bg-slate-400 rounded-[50%]"></div>
          <div className="w-[50px] h-[50px]  border-1 border-black rounded-[50%] text-center flex items-center justify-center mt-4 mb-4">
            5
          </div>
          <h2 className="text-[20px] mb-5">Recibi tu compra</h2>
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
