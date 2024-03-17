import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddView() {
  return (
    <main>
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" />
          <span className="error"></span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <div className="error"></div>
        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  );
}
