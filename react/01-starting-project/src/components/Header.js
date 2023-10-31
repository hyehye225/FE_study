import logo from "../assets/investment-calculator-logo.png";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>{props.content}</h1>
    </header>
  );
};

export default Header;
