import Logo from "../assets/logo-white.png"
import LogoD from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = ({ theme, light }) => {
  return (
    <div className="header" style={{ backgroundColor: `${theme}` }}>
      <div className="brand">
        <img src={light ? LogoD : Logo} alt="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
export default Header
