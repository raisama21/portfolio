export default function MyExperites() {
  return (
    <section>
      <div
        className="bg-services bg-cover bg-center py-24 custom-overlay"
        id="my-services"
      >
        <div className="max-w-desktop mx-auto text-center">
          <h2 className="custom-underline text-accent mb-16">What I do</h2>
          <div className="grid gap-8 max-w-[72rem] mx-auto mb-8 px-5 lg:grid-cols-3 lg:mb-14">
            <div>
              <h3 className="text-light mb-4">Web Development</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h3 className="text-light mb-4">E-Commerce</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h3 className="text-light mb-4">WordPress</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
