import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const slides = ["/home.jpg", "/slide2.jpg", "/slide3.jpg", "/slide4.jpg", "/slide5.jpg"];

const impactStats = [
  { label: "Farmer Buying Points", value: 9, suffix: "+" },
  { label: "Core Service Areas", value: 6, suffix: "+" },
  { label: "Livestock & Crop Lines", value: 12, suffix: "+" },
  { label: "Support Availability", value: 24, suffix: "/7" },
];

const testimonials = [
  {
    name: "Commercial Maize Buyer",
    quote:
      "Agro Africa gives us reliable supply and clear communication. Their consistency helps us plan our operations better.",
  },
  {
    name: "Smallholder Farmer Partner",
    quote:
      "We receive practical advice, fair produce handling, and better market opportunities. This has improved our household income.",
  },
  {
    name: "Livestock Customer",
    quote:
      "Their team responds quickly and explains options clearly. The service feels professional from inquiry to delivery.",
  },
];

function StatCard({ value, suffix, label }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 45;
    const timer = setInterval(() => {
      frame += 1;
      const next = Math.min(value, Math.round((frame / totalFrames) * value));
      setDisplay(next);
      if (frame >= totalFrames) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div style={statCard}>
      <p style={statValue}>
        {display}
        {suffix}
      </p>
      <p style={statLabel}>{label}</p>
    </div>
  );
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [subscriberEmail, setSubscriberEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subscribeLink = useMemo(() => {
    const subject = "Newsletter Subscription Request";
    const body = `Please subscribe this email to Agro Africa Trading updates: ${subscriberEmail || "(email not entered)"}`;
    return `mailto:agroafricatrading8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [subscriberEmail]);

  return (
    <div style={page}>
      <img src={slides[index]} style={hero} alt="Agro Africa farming activities" />

      <div style={intro}>
        <h1>Welcome To Agro Africa Trading</h1>
        <p>
          Agro Africa Trading is a modern agricultural company committed to transforming farming and trading through
          innovation, commercial agriculture, livestock development, crop production, support farmers
          with reliable markets, and provide quality agricultural inputs.
        </p>
        <h2 style={servicesHeading}>Our Services</h2>
        <ol
          style={{
            textAlign: "left",
            paddingLeft: "5%",
            paddingRight: "5%",
            margin: "20px auto",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "900px",
            wordWrap: "break-word",
          }}
        >
          <li>
            Crop and Animal Production (Maize, Beans, Soya Beans, Irish Potatoes, Cassava, Groundnuts, Rice & Chicken, Pigs, Cattle, Goats)
          </li>
          <li>Trading of Agricultural Produce to Consumers & Companies locally or Internationally</li>
          <li>
            Buying & Selling Livestock & Crop Harvests (Buying Points in Dedza, Salima, Mchinji, Chikhwawa,
            Nkhotakota, Dowa, Zomba, Karonga, Kasungu)
          </li>
          <li>Importing (Supplying) and Exporting Agricultural Inputs (Fertilizer, Pesticides & Seeds)</li>
          <li>Grading, Assembling and Quality Assurance of Harvests and Produce bought from farmers (Malawi farmers)</li>
          <li>Guidance and Advisory Services - Crop, Animal, and Market Advice, Guidance, and Insights</li>
        </ol>
        <div style={ctaRow}>
          <Link to="/services" style={{ ...cta, background: "#1b5e20" }}>
            View Services
          </Link>
          <Link to="/contact" style={{ ...cta, background: "#2e7d32" }}>
            Request Booking
          </Link>
        </div>
      </div>

      <section style={impactWrap}>
        <h2 style={sectionHeading}>Impact Snapshot</h2>
        <div style={impactGrid}>
          {impactStats.map((item) => (
            <StatCard key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </section>

      <div style={highlightsWrap}>
        <h2 style={{ marginTop: 0 }}>Why Customers Choose Us</h2>
        <div style={highlightsGrid}>
          <div style={highlightCard}>
            <h3 style={highlightTitle}>End-to-End Support</h3>
            <p>From production to market access, we support both smallholder and commercial farmers.</p>
          </div>
          <div style={highlightCard}>
            <h3 style={highlightTitle}>Trusted Inputs</h3>
            <p>We supply key agricultural inputs including fertilizers, seeds, and crop protection products.</p>
          </div>
          <div style={highlightCard}>
            <h3 style={highlightTitle}>Reliable Market Linkage</h3>
            <p>We buy, grade, and distribute produce with quality-focused handling and advisory support.</p>
          </div>
        </div>
      </div>

      <section style={testimonialWrap}>
        <h2 style={sectionHeading}>What Partners Say</h2>
        <div style={quoteBox}>
          <p style={quoteText}>"{testimonials[quoteIndex].quote}"</p>
          <p style={quoteName}>{testimonials[quoteIndex].name}</p>
          <div style={dotRow}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setQuoteIndex(i)}
                style={{ ...dot, opacity: i === quoteIndex ? 1 : 0.35 }}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={newsletterWrap}>
        <h2 style={{ ...sectionHeading, color: "#fff" }}>Get Market Updates</h2>
        <p style={{ marginTop: 0 }}>
          Receive product availability and agriculture service updates directly from our team.
        </p>
        <div style={subscribeRow}>
          <input
            type="email"
            placeholder="Enter your email"
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            style={subscribeInput}
          />
          <a href={subscribeLink} style={subscribeBtn}>
            Subscribe
          </a>
        </div>
      </section>
    </div>
  );
}

const page = {
  width: "100vw",
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #e8f5e9, #c8e6c9)",
  paddingBottom: "120px",
};

const hero = {
  width: "100%",
  height: "60vh",
  objectFit: "cover",
};

const intro = {
  padding: "40px 20px",
  textAlign: "center",
  fontSize: "22px",
  lineHeight: "1.8",
  color: "#1b5e20",
  background: "#ffffffcc",
  margin: "30px",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
};

const ctaRow = { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" };
const cta = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: 700,
  borderRadius: "8px",
  padding: "10px 16px",
};
const servicesHeading = {
  margin: "20px 0 10px",
  textAlign: "center",
  color: "#1b5e20",
};

const sectionHeading = { marginTop: 0, color: "#1b5e20" };

const impactWrap = {
  margin: "30px",
  padding: "24px",
  borderRadius: "12px",
  background: "linear-gradient(120deg, #f6fff3, #ecf9ff)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
};
const impactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "12px",
};
const statCard = {
  background: "#fff",
  padding: "16px",
  borderRadius: "10px",
  textAlign: "center",
};
const statValue = { fontSize: "30px", margin: "0 0 6px", color: "#1b5e20", fontWeight: 800 };
const statLabel = { margin: 0, color: "#234", fontWeight: 600 };

const highlightsWrap = {
  margin: "30px",
  padding: "24px",
  borderRadius: "12px",
  background: "#ffffffcc",
  color: "#1b5e20",
  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
};
const highlightsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};
const highlightCard = {
  background: "#f3fbf3",
  borderRadius: "10px",
  padding: "14px",
  lineHeight: "1.6",
};
const highlightTitle = { marginTop: 0, marginBottom: "8px" };

const testimonialWrap = {
  margin: "30px",
  padding: "24px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #fff4ec, #fefefe)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
};
const quoteBox = { background: "#fff", borderRadius: "10px", padding: "18px" };
const quoteText = { fontSize: "20px", lineHeight: "1.7", margin: "0 0 8px" };
const quoteName = { margin: "0 0 12px", fontWeight: 700, color: "#1b5e20" };
const dotRow = { display: "flex", gap: "8px", justifyContent: "center" };
const dot = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  border: "none",
  background: "#1b5e20",
  cursor: "pointer",
};

const newsletterWrap = {
  margin: "30px",
  padding: "24px",
  borderRadius: "12px",
  background: "linear-gradient(130deg, #1b5e20, #2f7d32)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
  color: "#fff",
};
const subscribeRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  alignItems: "center",
};
const subscribeInput = {
  flex: "1 1 260px",
  minWidth: "180px",
  border: "none",
  borderRadius: "8px",
  padding: "11px 12px",
  fontSize: "16px",
};
const subscribeBtn = {
  textDecoration: "none",
  color: "#1b5e20",
  background: "#fff",
  borderRadius: "8px",
  padding: "11px 14px",
  fontWeight: 800,
  marginLeft: "auto",
};
