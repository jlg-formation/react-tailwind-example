import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function HomeView() {
  return (
    <main className="flex-grow-0">
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="btn-primary">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </main>
  );
}

export default HomeView;
