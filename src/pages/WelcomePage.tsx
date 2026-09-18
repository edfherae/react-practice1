import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcome-page-container">
      <Link className="link-start" to={"/content/users"}>
        Начать
      </Link>
    </div>
  );
}
