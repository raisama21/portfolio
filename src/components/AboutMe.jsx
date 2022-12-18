import avatar2 from "../assets/avatar2.jpg";

export default function AboutMe() {
  return (
    <section>
      <div className="bg-light" id="about-me">
        <div className="grid max-w-[60rem] mx-auto my-20 text-center lg:text-left lg:my-44">
          <div>
            <h2 className="lg:pl-12 mb-2">Who I am</h2>
            <h3 className="custom-boxShadow bg-accent py-3 font-normal mb-9 lg:mb-0 lg:pl-12">
              Front-end developer based out of KTM
            </h3>
          </div>
          <div className="lg:col-start-2 lg:row-span-3 mb-5 lg:mb-0">
            <img src={avatar2} alt="#" className="mx-auto lg:mx-0" />
          </div>
          <div className="lg:row-start-2 row-span-2 lg:px-12">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
