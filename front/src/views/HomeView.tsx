import { Link } from "react-router-dom";

function HomeView() {
  return (
    <main>
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="btn-primary">
        Voir le stock
      </Link>
    </main>
  );
}

export default HomeView;
