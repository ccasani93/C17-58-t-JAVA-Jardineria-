import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HomePage } from "../../components/HomePage/HomePage";

export default function Home() {
  return (
    <div className="bg-yellowMain h-[100%] w-[100%]">
      <Header />
      <HomePage />
      <Footer/>
    </div>
  );
}
