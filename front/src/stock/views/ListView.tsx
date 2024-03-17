import { Link } from "react-router-dom";

export default function ListView() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <Link to="/stock/add">Ajouter</Link>
    </main>
  );
}
