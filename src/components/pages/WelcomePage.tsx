import { Link } from "react-router";

export default function WelcomePage() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
      <Link to={"/content"}>
        <button className="button-start">Начать</button>
      </Link>
    </div>
    
  );
}
