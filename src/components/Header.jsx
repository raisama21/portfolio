import logo from "../assets/devjane.png";
import HeroSection from "./HeroSection";
import NavigationBar from "./ui/NavigationBar";

export default function Header() {
  return (
    <div className="max-w-desktop mx-auto bg-light" id="home">
      <div className="flex items-center justify-between px-5 mt-8 mb-12 lg:mt-10 lg:mb-20 lg:px-11">
        <div className="w-36">
          <img src={logo} alt="#" className="cursor-pointer" />
        </div>
        <nav>
          <NavigationBar />
        </nav>
      </div>

      <section>
        <HeroSection />
      </section>
    </div>
  );
}
