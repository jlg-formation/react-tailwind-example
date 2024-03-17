import { Link } from "react-router-dom";

export default function AddView() {
  return (
    <main>
      <h1>Ajouter un article</h1>
      <Link to="..">Revenir à la liste</Link>
    </main>
  );
}
