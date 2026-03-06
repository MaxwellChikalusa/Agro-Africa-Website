import FarmCard from "../components/FarmCard";

export default function About() {
  return (
    <div style={page}>
      {/* Hero image */}
      <img src="/about.jpg" style={heroStyle} />

      {/* Intro text */}
      <div style={intro}>
        <h1>About Us</h1>
        <p>
          Agro Africa Trading focuses on agricultural transformation through crop production,
          livestock farming, and agribusiness partnerships (Supplying Of inputs). The company empowers farmers
          through training, input supply, and market access solutions. We work with smallholder
          and commercial farmers improving productivity, supporting sustainable agriculture, and
          strengthening food systems. Our goal is to become a leading agricultural value chain
          company in Africa.
        </p>
      </div>

      {/* Styled Company Information Section */}
      <div style={infoSection}>
        <div style={infoBox}>
          <h2 style={infoTitle}>Our Mission</h2>
          <p>
            To provide innovative agricultural services, quality farm inputs, and mechanized
            solutions that improve farmer productivity, income generation, and sustainable
            agricultural development.
          </p>
        </div>

        <div style={infoBox}>
          <h2 style={infoTitle}>Our Vision</h2>
          <p>
            To become a leading agricultural service provider in Malawi and across Africa,
            promoting modern farming, food security, and agricultural commercialization.
          </p>
        </div>

        <div style={infoBox}>
          <h2 style={infoTitle}>Our Core Values</h2>
          <ul style={valuesList}>
            <li>Integrity and professionalism</li>
            <li>Farmer empowerment</li>
            <li>Innovation in agriculture</li>
            <li>Sustainability</li>
            <li>Quality service delivery</li>
            <li>Commitment to agricultural growth</li>
          </ul>
        </div>

        <div style={infoBox}>
          <h2 style={infoTitle}>Our Leadership Team</h2>
          <p>
            Agro Africa Trading is guided by a dedicated management team with experience
            in agricultural production, farm operations, and business management. Our
            leadership works together to ensure efficient service delivery and long-term
            support to farmers and agricultural partners.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div style={cardsContainer}>
        <FarmCard
          title="Managing Director"
          img="/victor.jpg"
          label="MR. VICTOR BANSWELL "
          description="Master’s degree in Business Administration(MBA), BSc in Accounting – Malawi College of Accountancy. Provides strategic leadership, financial oversight, and overall business direction for Agro Africa Trading."
          extra="Responsible for corporate governance, investment decisions, financial sustainability, and partnership development while ensuring operational growth and accountability across all departments."
        />
        <FarmCard
          title="Finance Manager"
          img="/robert.jpg"
          label="MR. ROBERT NGWIRA "
          description="BSc in Accounting. Oversees financial planning, budgeting, and financial reporting of the company."
          extra="Manages accounts, prepares financial statements, monitors cash flow, ensures compliance with financial regulations, and supports management with accurate financial analysis for decision-making."
        />
        <FarmCard
          title="Administration and Systems Support Officer"
          img="/max.jpg"
          label="MR. MAXWELL CHIKALUSA"
          description="BSc in Computer Science. Manages administrative operations and provides systems and technical support."
          extra="Oversees office documentation, digital systems management, data reporting, and ensures smooth coordination between departments to enhance operational efficiency."
        />
        <FarmCard
          title="Farm Manager"
          img="/kennie.jpg"
          label="MR. KENNEDY KATELERA"
          description="BSc in Agriculture Economics (Pending) and Diploma in Irrigation Technology. Supervises all farm operations and production activities."
          extra="Responsible for irrigation management, crop planning, input utilization, production efficiency, cost control, and ensuring maximum yield through modern agricultural practices."
        />
        <FarmCard
          title="Operations and Field Support Officer"
          img="/peter.jpg"
          label="MR. PETER MANDALA"
          description="Mikolongwe College of Veterinary Science – Farm Management. Coordinates field operations and livestock management activities."
          extra="Provides technical support to farmers, oversees animal health programs, monitors farm performance, and ensures proper implementation of field production standards."
        />
        <FarmCard
          title="Tractor Operator"
          img="/gift.jpg"
          label="MR. GIFT LUSBAD"
          description="Licensed professional driver responsible for operating tractors and farm machinery."
          extra="Handles land preparation, ploughing, transportation of farm inputs and produce, and ensures proper maintenance and safe operation of agricultural equipment."
        />
      </div>
    </div>
  );
}

/* Styles */
const page = { width: "100vw", minHeight: "100vh" };
const heroStyle = { width: "100%", height: "50vh", objectFit: "cover" };
const intro = { padding: "40px 20px", textAlign: "center", fontSize: "22px", lineHeight: "1.8", color: "#000" };
const infoSection = { maxWidth: "1000px", margin: "0 auto", padding: "20px", display: "flex", flexDirection: "column", gap: "25px" };
const infoBox = { background: "#f5f7f5", padding: "25px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", textAlign: "center", lineHeight: "1.7", fontSize: "18px" };
const infoTitle = { color: "#1b5e20", marginBottom: "10px" };
const valuesList = { listStyle: "none", padding: 0, margin: 0, lineHeight: "2" };
const cardsContainer = { display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center", marginTop: "50px", paddingBottom: "50px" };
