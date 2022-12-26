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
          <div className="row-span-2 px-5 lg:row-start-2 lg:px-12">
            <p className="mb-4 text-xl font-normal">
              I am an aspiring self-taught frontend web developer based out of
              Kathmandu Nepal.
            </p>
            <p>
              While I may not have a formal education in computer science or web
              development, I have always been passionate about technology and
              programming. I have taught myself programming languages and
              frameworks through online resources. I have had the opportunity to
              work on a wide range of front-end development projects, including
              building responsive websites and creating interactive user
              interfaces. I am proficient in SASS, Tailwindcss, Javascript,
              React and I am comfortable working with both static and dynamic
              websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
