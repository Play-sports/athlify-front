import FeatureCard from "./FeatureCard";
import "./AthlifyFeatures.css";

const feats = [
  {
    title: "Welcome",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
        sollicitudin sem ac rhoncus. Nam suscipit sollicitudin risus, non
        eleifend orci laoreet tempor. Fusce vitae gravida leo, non pulvinar`,
    cta: "Join now",
    link: "/explore",
  },
  {
    title: "Join activities",
    content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
        sollicitudin sem ac rhoncus. Nam suscipit sollicitudin risus, non
        eleifend orci laoreet tempor. Fusce vitae gravida leo, non pulvinar`,
    cta: "More",
    link: "/explore",
  },
  {
    title: "Book courts",
    content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
        sollicitudin sem ac rhoncus. Nam suscipit sollicitudin risus, non
        eleifend orci laoreet tempor. Fusce vitae gravida leo, non pulvinar`,
    cta: "Book",
    link: "/explore",
  },
  {
    title: "Have fun!",
    content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
        sollicitudin sem ac rhoncus. Nam suscipit sollicitudin risus, non
        eleifend orci laoreet tempor. Fusce vitae gravida leo, non pulvinar`,
    cta: "Explore",
    link: "/explore",
  },
];

function AthlifyFeatures() {
  return (
    <div className="features-wrapper wrapper">
      <h1>
        What{" "}
        <span style={{ fontWeight: "bold", color: "darkorange" }}>Athlify</span>{" "}
        does ?
      </h1>
      <div className="features-card-wrapper">
        {feats.map((feature: any) => (
          <FeatureCard data={feature} />
        ))}
      </div>
    </div>
  );
}

export default AthlifyFeatures;
