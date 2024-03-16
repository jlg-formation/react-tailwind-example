import { Link } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HeaderLayout />
      <main>
        <h1>Page non trouvée... 😥</h1>
        <Link to="/" className="btn-primary">
          Accueil
        </Link>
      </main>
      <FooterLayout />
    </div>
  );
}

export default ErrorPage;
