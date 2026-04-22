import { useEffect, useState } from "react";

export default function QuickActions() {
  const phone = "+265881381836";
  const whatsapp = "+265992608371";
  const message =
    "Hello Agro Africa Trading, I would like to inquire about your agricultural products/services.";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={{ ...wrap, ...(isMobile ? wrapMobile : null) }}>
      <a
        href={`tel:${phone}`}
        style={{ ...btn, ...(isMobile ? btnMobile : null), ...callBtn }}
        aria-label="Call Agro Africa Trading"
      >
        Call Now
      </a>
      <a
        href={`https://wa.me/${whatsapp.replace("+", "")}?text=${encodeURIComponent(message)}`}
        style={{ ...btn, ...(isMobile ? btnMobile : null), ...waBtn }}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}

const wrap = {
  position: "fixed",
  right: "16px",
  bottom: "16px",
  zIndex: 999,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const wrapMobile = {
  right: "12px",
  bottom: "12px",
  gap: "8px",
};

const btn = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: 700,
  fontSize: "15px",
  padding: "11px 14px",
  borderRadius: "999px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
  textAlign: "center",
};

const btnMobile = {
  fontSize: "13px",
  padding: "9px 12px",
};

const callBtn = {
  background: "#1b5e20",
};

const waBtn = {
  background: "#1f8b4c",
};
