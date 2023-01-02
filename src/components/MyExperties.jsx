import { useState } from "react";

export default function MyExperites() {
  const [showMore, setShowMore] = useState("hide");

  return (
    <section>
      <div
        className="bg-services bg-cover bg-center py-24 custom-overlay"
        id="my-services"
      >
        <div className="max-w-desktop mx-auto text-center">
          <h2 className="custom-underline text-accent mb-16">My experties</h2>
          <div className="grid gap-8 max-w-[72rem] mx-auto mb-8 px-5 lg:grid-cols-3 lg:mb-14">
            <div>
              <h3 className="text-light mb-4">HTML / CSS</h3>
              <p className="text-light">
                "I have a strong foundation in HTML and CSS, with experience
                building and styling webpages from scratch. I have a keen eye
                for detail and a passion for creating visually appealing layouts
                that are user-friendly and responsive on a variety of devices.
                <button
                  onClick={() => {
                    setShowMore("show1");
                  }}
                >
                  ...see more
                </button>
                {showMore === "show1" ? (
                  <span>
                    In my previous projects, I have demonstrated my ability to
                    implement advanced features such as animations, transitions,
                    and responsive design using HTML and CSS. I am comfortable
                    working with both traditional and modern web development
                    approaches, and I am constantly seeking out new ways to
                    improve my skills and stay up to date with the latest
                    technologies and best practices in the field. Overall, I am
                    confident in my ability to use HTML and CSS to create
                    professional, high-quality web applications and websites."
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div>
              <h3 className="text-light mb-4">SCSS / Tailwindcss</h3>
              <p className="text-light">
                "I have experience working with SCSS and Tailwind CSS to create
                professional and visually appealing web designs. I am skilled in
                using these technologies to create stylesheets that are
                maintainable, scalable, and modular, allowing me to quickly and
                <button
                  onClick={() => {
                    setShowMore("show1");
                  }}
                >
                  ...see more
                </button>
                {showMore === "show2" ? (
                  <span>
                    efficiently develop and iterate on web projects. I have a
                    strong understanding of best practices and techniques for
                    using SCSS and Tailwind CSS, and I am comfortable working
                    with both frameworks to build responsive and user-friendly
                    websites and web applications."
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div>
              <h3 className="text-light mb-4">Javascript / React</h3>
              <p className="text-light">
                "I have a strong foundation in JavaScript and experience
                building web applications using the React framework. I am
                comfortable working with a variety of modern JavaScript
                libraries and tools, and have a solid understanding of &nbsp;
                <button
                  onClick={() => {
                    setShowMore("show3");
                  }}
                >
                  ...see more
                </button>
                {showMore === "show3" ? (
                  <span>
                    fundamental concepts such as asynchronous programming, data
                    structures, and algorithms. In my previous projects, I have
                    demonstrated my ability to develop interactive, data-driven
                    applications using React, and have a track record of
                    delivering high-quality, well-designed code that is easy to
                    maintain and scale. I am constantly seeking out new ways to
                    improve my skills and stay up to date with the latest
                    technologies and best practices in the field."
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
          <a href="#my-work">
            <button className="font-black text-[#333333] bg-accent py-3 px-12 shadow-md">
              see my work
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
