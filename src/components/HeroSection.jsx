import avatar from "../assets/avatar.jpg";

export default function HeroSection() {
  return (
    <div className="relative max-w-[49rem] mx-auto mb-16 lg:mb-24 lg:flex lg:items-center lg:gap-6">
      <div className="text-center mb-5 order-2 lg:text-left">
        <h1 className="mb-2">
          Hi, I am
          <br />
          <strong className="font-black">Dev Dawa Rai</strong>
        </h1>
        <p className="lg:absolute lg:right-0 lg:pr-56 lg:w-[52rem] lg:text-right tracking-widest font-normal text-accent2 bg-accent text-2xl py-2">
          FRONT-END DEV
        </p>
      </div>
      <div className="w-80 mx-auto z-10 lg:mx-0 shadow-lg">
        <img src={avatar} alt="#" />
      </div>
    </div>
  );
}
