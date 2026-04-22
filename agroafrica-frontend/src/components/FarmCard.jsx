import { useState } from "react";

export default function FarmCard({ title, img, description, extra, label }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={card}>
      {label && <span style={labelStyle}>{label}</span>}
      <img src={img} alt={title} style={image} />
      <h2>{title}</h2>
      <p style={text}>{description}</p>

      {open && (
        <div style={more}>
          <p>{extra}</p>
        </div>
      )}

      <button style={btn} onClick={() => setOpen(!open)}>
        {open ? "See Less" : "See More"}
      </button>
    </div>
  );
}

const card = {
  width: "320px",
  background: "#fff",
  padding: "18px",
  borderRadius: "14px",
  boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
  textAlign: "center"
};

const image = {
  width: "100%",
  height: "190px",
  objectFit: "cover",
  borderRadius: "10px"
};

const text = {
  fontSize: "20px",
  lineHeight: "1.8"
};

const more = {
  background: "#eaffea",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  fontSize: "20px"
};

// Keep original green button color
const btn = {
  marginTop: "10px",
  background: "green",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  fontSize: "18px"
};

const labelStyle = {
  display: "inline-block",
  background: "#28a745",
  color: "white",
  padding: "5px 10px",
  borderRadius: "5px",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "16px"
};
