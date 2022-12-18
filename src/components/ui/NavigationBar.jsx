import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function NavigationBar() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((oldShow) => !oldShow);
  }

  return (
    <>
      <HamburgerMenu handleShow={() => handleShow()} show={show} />
      {show && (
        <ul className="nav-list">
          <li onClick={handleShow}>
            <a href="#home">Home</a>
          </li>
          <li onClick={handleShow}>
            <a href="#my-services">My services</a>
          </li>
          <li onClick={handleShow}>
            <a href="#about-me">About me</a>
          </li>
          <li onClick={handleShow}>
            <a href="#my-work">My work</a>
          </li>
        </ul>
      )}
    </>
  );
}
