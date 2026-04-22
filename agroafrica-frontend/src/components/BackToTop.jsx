import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button style={btn} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      ↑
    </button>
  );
}

const btn = {
  position: "fixed",
  right: "16px",
  bottom: "126px",
  zIndex: 999,
  border: "none",
  borderRadius: "999px",
  background: "#143f17",
  color: "#fff",
  width: "34px",
  height: "34px",
  padding: 0,
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 800,
  lineHeight: "1",
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
};
