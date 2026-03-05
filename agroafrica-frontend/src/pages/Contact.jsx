import img from "../assets/contact.jpg";

export default function Contact() {
  return (
    <div style={page}>
      <img src={img} style={image} />

      <div style={card}>
        <h1>Contact Agro Africa Trading</h1>

        <p>📞 Phone: +265 881 381 836</p>
        <p>💬 WhatsApp: +265 992 608 371</p>
        <p>📧 Email: agroafricatrading8@gmail.com</p>
        <p>📍 Location: Lilongwe, Malawi</p>

        <p>
          We welcome farmers, partners and investors to work with Agro Africa Trading
          towards transforming agriculture and improving livelihoods.
        </p>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #e8f5e9, #81c784)"
};

const image = {
  width: "100%",
  height: "45vh",
  objectFit: "cover"
};

const card = {
  width: "70%",
  margin: "30px auto",
  background: "#ffffffe6",
  padding: "40px",
  textAlign: "center",
  fontSize: "22px",
  borderRadius: "15px",
  color: "#1b5e20",
  boxShadow: "0 8px 22px rgba(0,0,0,0.3)"
};