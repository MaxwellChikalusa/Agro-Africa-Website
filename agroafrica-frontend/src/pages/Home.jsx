import { useEffect, useState } from "react";
import FarmCard from "../components/FarmCard";

import s1 from "../assets/slide1.jpg";
import s2 from "../assets/slide2.jpg";
import s3 from "../assets/slide3.jpg";

const slides = [s1, s2, s3];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={page}>
      <img src={slides[index]} style={hero} />

      <div style={intro}>
        <h1>Welcome To Agro Africa Trading</h1>
        <p>
          Agro Africa Trading is a modern agricultural company committed to transforming farming through innovation,
          commercial agriculture, and livestock development. We promote sustainable crop production, support farmers
          with reliable markets, and provide quality agricultural inputs(Fertilizers, Seeds, Pesticides). Our organization works closely with
          communities to improve food security, increase farmer income, and promote agribusiness growth across Malawi.
          We believe agriculture is the backbone of economic development and rural empowerment.
        </p>
        <ol
  style={{
    textAlign: "left", paddingLeft: "4cm", paddingRight: "4cm", margin: "20px auto",fontSize: "20px",lineHeight: "1.8",
        }}
      >
        <li>
          Crop and Animal Production (Maize, Beans, Soya Beans, Irish Potatoes, Cassava, Groundnuts, Rice & Chicken, Pigs, Cattle,Goats)
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
          Grading, Assembling and Quality Assurance of Harvests and Produce bought from farmers(Malawi farmers)
        </li>
        <li>
          Guidance and Advisory Services-Crop, Animal, and Market Advice, Guidance, and Insights
        </li>
      </ol>
      </div>
    </div>
  );
}

const page = {
  width: "100vw",
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #e8f5e9, #c8e6c9)"
};

const hero = {
  width: "100%",
  height: "60vh",
  objectFit: "cover"
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
  boxShadow: "0 6px 18px rgba(0,0,0,0.2)"
};