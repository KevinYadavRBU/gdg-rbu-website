import shapes from "../assets/shapes.png";

export default function Shapes({ className = "" }) {
  return <img src={shapes} alt="" className={`w-full ${className}`} />;
}