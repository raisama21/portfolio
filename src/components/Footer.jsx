import { FaCodepen, FaDribbble, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-desktop mx-auto py-16">
      <div className="flex flex-col items-center">
        <h3 className="text-accent font-medium mb-8 tracking-wider">
          freekinguse21@gmail.com
        </h3>
        <div className="w-60 flex justify-between ">
          <a href="#">
            <FaCodepen className="text-2xl text-accent" />
          </a>
          <a href="#">
            <FaDribbble className="text-2xl text-accent" />
          </a>
          <a href="#">
            <FaTwitter className="text-2xl text-accent" />
          </a>
          <a
            href="https://github.com/raisama21?tab=repositories"
            target="_blank"
          >
            <FaGithub className="text-2xl text-accent" />
          </a>
        </div>
      </div>
    </div>
  );
}
