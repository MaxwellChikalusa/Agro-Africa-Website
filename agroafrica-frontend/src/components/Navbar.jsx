import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav style={nav}>
      <div style={logoBox}>
        <img src={logo} style={logoStyle} />
        <h2>Agro Africa Trading</h2>
      </div>

      <div style={links}>
        <Link style={link} to="/">Home</Link>
        <Link style={link} to="/about">About</Link>
        <Link style={link} to="/services">Services</Link>
        <Link style={link} to="/projects">Projects</Link>
        <Link style={link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "green",
  padding: "15px 30px",
  flexWrap: "wrap",
  color: "white"
};

const logoBox = { display: "flex", alignItems: "center", gap: "10px" };

const logoStyle = { width: "55px", height: "55px" };

const links = { display: "flex", gap: "25px" };

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold"
};