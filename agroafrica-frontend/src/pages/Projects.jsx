import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Crop Management",
    text: "Cultivating maize, rice transplanting, cassava planting, groundnuts production, Irish potato farming and soya beans farming improving national food production.",
    mediaType: "image",
    mediaSrc: "/pest-management.jpg",
    mediaAlt: "Our Farm Manager (Kennedy Katelera) Pest Management",
    label: "Our Farm Manager (Kennedy Katelera) Pest Management",
  },
  {
    title: "Animal Production Projects (Keeping, Buying, Selling and Supplying animals for Food and Breeding)",
    text: "We are rearing cattle, goat, chickens and commercial pig farming operations.",
    mediaType: "image",
    mediaSrc: "/chickens.jpg",
    mediaAlt: "Animal production activities",
    label: "Animal production activities",
  },
  {
    title: "Agricultural Development and Supplying of Fertilizers, Seeds and Chemicals",
    text: "Community farmer support programs through easy access to market, farm training initiatives and agricultural commercialization activities.",
    mediaType: "video",
    mediaSrc: "/tractorinoperat.mp4",
    mediaLabel: "Our tractors in operations",
  },
];

export default function Projects() {
  return (
    <div style={page}>
      <img src="/projects.jpg" style={image} alt="Agro Africa projects" />

      <div style={container}>
        <h1>Our Projects</h1>

        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

function Project({ title, text, mediaType, mediaSrc, mediaAlt, label, mediaLabel }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaType !== "video" || !videoRef.current) return;

    const attemptPlayback = async () => {
      try {
        await videoRef.current.play();
      } catch {
        // Autoplay can still be blocked by browser policy.
      }
    };

    attemptPlayback();
  }, [mediaType]);

  return (
    <div style={box}>
      <h2>{title}</h2>

      {mediaType === "image" ? (
        <figure style={mediaWrap}>
          <img src={mediaSrc} alt={mediaAlt} style={imageMedia} />
          <figcaption style={caption}>{label}</figcaption>
        </figure>
      ) : null}

      {mediaType === "video" ? (
        <figure style={mediaWrap}>
          <video
            ref={videoRef}
            src={mediaSrc}
            style={videoMedia}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
          <figcaption style={caption}>{mediaLabel}</figcaption>
        </figure>
      ) : null}

      <p>{text}</p>
    </div>
  );
}

const page = {
  background: "linear-gradient(to bottom, #e0f2f1, #80cbc4)",
  minHeight: "100vh",
};

const image = {
  width: "100%",
  height: "40vh",
  objectFit: "cover",
};

const container = {
  padding: "40px",
  color: "#004d40",
};

const box = {
  width: "100%",
  background: "#ffffffd9",
  padding: "30px",
  marginBottom: "20px",
  borderRadius: "12px",
  fontSize: "22px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
};

const mediaWrap = {
  margin: "20px 0",
};

const imageMedia = {
  width: "100%",
  maxHeight: "420px",
  objectFit: "cover",
  borderRadius: "10px",
  display: "block",
};

const videoMedia = {
  width: "100%",
  maxHeight: "420px",
  objectFit: "contain",
  borderRadius: "10px",
  display: "block",
  background: "#000",
};

const caption = {
  marginTop: "10px",
  fontSize: "18px",
  fontWeight: 700,
  color: "#1b5e20",
};
