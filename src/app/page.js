import { Carousel } from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";
import { HowBuy } from "../../components/HowBuy/HowBuy";
import { Products } from "../../components/Products/Products";

export default function Home({ children }) {
  return (
    <div className="bg-yellowMain h-[100%] w-[100%]">
      <Header />
      <Carousel />
      <Products />
      <HowBuy />
      {/* {children} */}
    </div>
  );
}
