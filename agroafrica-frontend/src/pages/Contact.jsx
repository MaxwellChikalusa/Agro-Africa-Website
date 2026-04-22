import { useMemo, useState } from "react";

export default function Contact() {
  const faqs = [
    {
      q: "Do you buy produce directly from farmers?",
      a: "Yes. We buy selected harvests through our buying points after quality checks.",
    },
    {
      q: "Can I request tractor hiring services?",
      a: "Yes. Send your location and preferred date through the inquiry form or WhatsApp.",
    },
    {
      q: "Do you serve both crops and livestock clients?",
      a: "Yes. We support crops, livestock, farm inputs, and market linkage services.",
    },
    {
      q: "How fast do you respond to inquiries?",
      a: "Most inquiries are responded to quickly through WhatsApp and email during working hours.",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Crop Produce",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(-1);

  const composedMessage = useMemo(() => {
    return [
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Interest: ${form.interest}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");
  }, [form]);

  const mailto = `mailto:agroafricatrading8@gmail.com?subject=${encodeURIComponent(
    "New Customer Inquiry - Agro Africa Trading"
  )}&body=${encodeURIComponent(composedMessage)}`;
  const whatsapp = `https://wa.me/265992608371?text=${encodeURIComponent(composedMessage)}`;

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div style={page}>
      <img src="/contact.jpg" style={image} alt="Contact Agro Africa Trading" />

      <div style={card}>
        <h1>Contact Agro Africa Trading</h1>

        <p>Phone: +265 881 381 836</p>
        <p>WhatsApp: +265 992 608 371</p>
        <p>Email: agroafricatrading8@gmail.com</p>
        <p>Location: Agro Africa Trading, Queens Drive, Bluefin Mall, Right Wing. Second Floor, P.O.Box 30657 Lilongwe, Malawi.
        </p>
        <p>
          Google Map:{" "}
          <a href="https://maps.app.goo.gl/Eu5MwWukxhKhA6cu5" target="_blank" rel="noreferrer" style={mapLink}>
            https://maps.app.goo.gl/Eu5MwWukxhKhA6cu5
          </a>
        </p>
        <div style={formCard}>
          <h2 style={formTitle}>Quick Inquiry</h2>
          <input
            style={input}
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={onChange}
          />
          <input
            style={input}
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={onChange}
          />
          <select style={input} name="interest" value={form.interest} onChange={onChange}>
            <option>Crop Produce</option>
            <option>Livestock</option>
            <option>Farm Inputs</option>
            <option>Tractor Hiring</option>
            <option>Partnership</option>
          </select>
          <textarea
            style={{ ...input, minHeight: "120px", resize: "vertical" }}
            name="message"
            placeholder="Tell us what you need"
            value={form.message}
            onChange={onChange}
          />

          <div style={actions}>
            <a href={mailto} style={{ ...cta, background: "#1b5e20" }}>
              Send by Email
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" style={{ ...cta, background: "#1f8b4c" }}>
              Send by WhatsApp
            </a>
          </div>
        </div>

        <div style={faqCard}>
          <h2 style={formTitle}>Frequently Asked Questions</h2>
          <div style={faqList}>
            {faqs.map((item, idx) => (
              <div key={item.q} style={faqItem}>
                <button style={faqButton} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  {item.q}
                </button>
                {openFaq === idx && <p style={faqAnswer}>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const page = { minHeight: "100vh", background: "linear-gradient(to bottom, #e8f5e9, #81c784)" };
const image = { width: "100%", height: "45vh", objectFit: "cover" };
const card = {
  width: "min(900px, 92%)",
  margin: "30px auto",
  background: "#ffffffe6",
  padding: "40px",
  textAlign: "center",
  fontSize: "22px",
  borderRadius: "15px",
  color: "#1b5e20",
  boxShadow: "0 8px 22px rgba(0,0,0,0.3)",
};
const formCard = {
  marginTop: "25px",
  textAlign: "left",
  background: "#fff",
  padding: "18px",
  borderRadius: "12px",
};
const formTitle = { marginTop: 0, color: "#1b5e20" };
const input = {
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "12px",
  border: "1px solid #d0d0d0",
  borderRadius: "8px",
  padding: "11px 12px",
  fontSize: "16px",
};
const actions = { display: "flex", flexWrap: "wrap", gap: "10px" };
const faqCard = {
  marginTop: "20px",
  textAlign: "left",
  background: "#fff",
  padding: "18px",
  borderRadius: "12px",
};
const faqList = { display: "grid", gap: "10px" };
const faqItem = { background: "#f6fbf6", borderRadius: "8px", padding: "10px 12px" };
const faqButton = {
  width: "100%",
  textAlign: "left",
  border: "1px solid #b8d8ba",
  background: "#eef9ef",
  color: "#1b5e20",
  borderRadius: "8px",
  padding: "10px 12px",
  cursor: "pointer",
  fontWeight: 700,
};
const faqAnswer = { margin: "10px 0 0", lineHeight: "1.6", color: "#1f3e22" };
const cta = {
  textDecoration: "none",
  color: "white",
  borderRadius: "8px",
  padding: "10px 14px",
  fontSize: "16px",
  fontWeight: 700,
};
const mapLink = {
  color: "#1b5e20",
  fontWeight: 700,
  wordBreak: "break-all",
};
