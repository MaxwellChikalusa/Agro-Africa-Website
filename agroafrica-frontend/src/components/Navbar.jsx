import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <div style={logoBox}>
        <img src="/logo.jpg" alt="Agro Africa Logo" style={logoStyle} />
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

/* ===== STYLES ===== */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#1b5e20",   // dark green for consistency
  padding: "15px 30px",
  flexWrap: "wrap",
  color: "white",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
};

const logoBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const logoStyle = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",     // makes the logo circular if desired
  objectFit: "cover"
};

const links = {
  display: "flex",
  gap: "25px"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};
