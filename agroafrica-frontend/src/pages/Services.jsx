import FarmCard from "../components/FarmCard";

export default function Services() {
  return (
    <div style={page}>
      {/* Hero */}
      <img src="/services.jpg" style={heroStyle} />

      {/* Intro */}
      <div style={intro}>
        <h1>Agricultural Services</h1>
        <p>
          Agro Africa Trading delivers professional agricultural services including farm management,
          input distribution (Fertilizer, Pesticides, Seeds), livestock development
          and crop production supporting farmers from land preparation to marketing.
        </p>
          <ol
            style={{
              textAlign: "left",
              paddingLeft: "5%",
              paddingRight: "5%",
              margin: "20px auto",
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "900px",   // keeps it neat on large screens
              wordWrap: "break-word"
            }}
          >
            <li>
              Crop and Animal Production (Maize, Beans, Soya Beans, Irish Potatoes, Cassava, Groundnuts, Rice & Chicken, Pigs, Cattle, Goats)
            </li>
            <li>
              Trading of Agricultural Produce to Consumers & Companies locally or Internationally
            </li>
            <li>
              Buying & Selling Livestock & Crop Harvests (Buying Points in Dedza, Salima, Mchinji, Chikhwawa, Nkhotakota, Dowa, Zomba, Karonga, Kasungu)
            </li>
            <li>
              Importing (Supplying) and Exporting Agricultural Inputs (Fertilizer, Pesticides & Seeds)
            </li>
            <li>
              Grading, Assembling and Quality Assurance of Harvests and Produce bought from farmers (Malawi farmers)
            </li>
            <li>
              Guidance and Advisory Services — Crop, Animal, and Market Advice, Guidance, and Insights
            </li>
          </ol>

      </div>

      {/* CARDS */}
      <div style={cardsContainer}>
        <FarmCard title="Crop Management" img="/maize.jpg" label="Maize Management"
          description="Land preparation, planting supervision and crop monitoring."
          extra="We grow maize, buy from farmers, sell to consumers and companies, and supply maize for all agricultural needs."
        />

        <FarmCard title="Rice Cultivation Support" img="/rice.jpg" label="Rice Management"
          description="Irrigation, transplanting and crop care."
          extra="We grow rice, buy from farmers, sell to consumers and companies, and supply rice for markets."
        />

        <FarmCard title="Groundnuts" img="/groundnuts.jpg" label="Groundnuts Management"
          description="Groundnut farming supports oil processing and nutrition security."
          extra="We grow groundnuts, buy from farmers, sell to consumers and companies, and supply groundnuts for processing and consumption."
        />

        <FarmCard title="Irish Potatoes" img="/potatoes.jpg" label="Potatoes Management"
          description="Disease-free seed production support."
          extra="We grow Irish potatoes, buy from farmers, sell to consumers and companies, and supply potatoes for markets."
        />

        <FarmCard title="Cattle Advisory" img="/cattle.jpg" label="Cattle Management"
          description="Housing, feeding and disease control."
          extra="We rear cattle, buy from farmers, sell to consumers and companies, and supply healthy cattle for breeding or consumption."
        />

        <FarmCard title="Poultry Services" img="/chickens.jpg" label="Chicken Management"
          description="Layer and broiler production systems."
          extra="We rear chickens, buy from farmers, sell to consumers and companies, and supply chickens for eggs and meat."
        />

        <FarmCard title="Pig Farming" img="/pigs.jpg" label="Pig Farming"
          description="Commercial pig production services."
          extra="We rear pigs, buy from farmers, sell to consumers and companies, and supply pigs for meat and breeding."
        />

        <FarmCard title="Goats Farming" img="/goats.jpg" label="Goats"
          description="Goat production for rural livelihoods."
          extra="We rear goats, buy from farmers, sell to consumers and companies, and supply goats for meat and breeding."
        />

        <FarmCard title="Fertilizer Supply" img="/supply.jpg" label="Fertilizer Management"
          description="Certified fertilizers for crops."
          extra="We supply fertilizers, buy from producers, and sell to farmers and companies for improved soil fertility."
        />

        <FarmCard title="Pesticides & Crop Protection" img="/pesticides.jpg" label="Crop Protection"
          description="Protection against pests and diseases."
          extra="We supply pesticides, buy from manufacturers, and sell to farmers and companies for safe crop protection."
        />

        <FarmCard title="Irrigation & Water Management" img="/irrigation.jpg" label="Irrigation"
          description="Reliable irrigation solutions."
          extra="Efficient water usage for year-round farming, we also advise farmers on the better Irrigation type for their Land."
        />

        <FarmCard title="Tractor Hiring Services" img="/tractor.jpg" label="Mechanization"
          description="Land preparation and ploughing services."
          extra="We provide tractors for hire, support farmers with mechanized land preparation, and ensure services are available for consumers and companies."
        />
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const page = {
  width: "100vw",
  minHeight: "100vh",
  background: "linear-gradient(180deg,#e8f5e9,#a5d6a7)"
};

const heroStyle = {
  width: "100%",
  height: "50vh",
  objectFit: "cover"
};

const intro = {
  padding: "40px",
  margin: "30px",
  textAlign: "center",
  fontSize: "22px",
  lineHeight: "1.8",
  color: "#1b5e20",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
};

const cardsContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  paddingBottom: "60px"
};
