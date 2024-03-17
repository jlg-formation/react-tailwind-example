import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ListView() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <div>
        <nav className="flex gap-1">
          <button title="Rafraîchir" className="btn">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="/stock/add" title="Ajouter" className="btn">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          <button title="Supprimer" className="btn">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </nav>
        <div className="flex items-center h-8"></div>
        <table className="">
          <thead className="">
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price text-right">3.40 €</td>
              <td className="qty text-right">123</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price text-right">3.40 €</td>
              <td className="qty text-right">123</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price text-right">3.40 €</td>
              <td className="qty text-right">123</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price text-right">3.40 €</td>
              <td className="qty text-right">123</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
