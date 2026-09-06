import { Link } from "react-router";

export default function WelcomePage() {
  return (
    <div className="welcome-page-container">
      <Link to={"/content"}>
        <button className="button-start">Начать</button>
      </Link>
    </div>
  );
}
