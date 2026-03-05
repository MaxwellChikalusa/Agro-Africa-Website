import img from "../assets/projects.jpg";

export default function Projects() {
  return (
    <div style={page}>
      <img src={img} style={image} />

      <div style={container}>
        <h1>Our Projects</h1>

        <Project
          title="Crop Production Projects(Growing, Buying, Selling and Supplying Crop Harvests)"
          text="Cultivating maize, rice transplanting, cassava planting, groundnuts production, Irish potato farming and soya beans farming improving national food production."
        />

        <Project
          title="Animal Production Projects(Keeping, Buying, Selling and Supplying animal for Food and Breeding)"
          text="We are rearing cattle and also cattle shelters are under construction, goat housing construction, chicken production and commercial pig farming operations."
        />

        <Project
          title="Agricultural Development and Supplying of Fertilizers, Seeds and Chemicals"
          text="Community farmer support programs through easy access to market , farm training initiatives and agricultural commercialization activities."
        />
      </div>
    </div>
  );
}

function Project({ title, text }) {
  return (
    <div style={box}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

const page = {
  background: "linear-gradient(to bottom, #e0f2f1, #80cbc4)"
};

const image = {
  width: "100%",
  height: "40vh",
  objectFit: "cover"
};

const container = {
  padding: "40px",
  color: "#004d40"
};

const box = {
  width: "100%",
  background: "#ffffffd9",
  padding: "30px",
  marginBottom: "20px",
  borderRadius: "12px",
  fontSize: "22px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
};