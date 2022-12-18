export default function HamburgerMenu(props) {
  const open = props.show ? "open" : "";
  const style = {
    zIndex: props.show ? "100" : "",
  };

  return (
    <div
      className={`hamburger-menu ${open}`}
      style={style}
      onClick={props.handleShow}
    >
      <span className="ham-top"></span>
      <span className="ham-middle"></span>
      <span className="ham-bottom"></span>
    </div>
  );
}
