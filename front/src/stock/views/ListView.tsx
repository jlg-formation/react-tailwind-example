import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useArticleStore } from "../ArticleStore";
import { useEffect } from "react";

export default function ListView() {
  const articleStore = useArticleStore();

  useEffect(() => {
    console.log("checking if articles is undefined");
    if (articleStore.articles === undefined) {
      articleStore.refresh();
    }
  }, [articleStore]);

  const handleRefresh = async () => {
    console.log("handleRefresh");
    await articleStore.refresh();
    console.log("refreshed");
  };
  return (
    <main>
      <h1>Liste des articles</h1>
      <div>
        <nav className="flex gap-1">
          <button title="Rafraîchir" onClick={handleRefresh} className="btn">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="/stock/add" title="Ajouter" className="button">
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
            {articleStore.articles === undefined && (
              <tr>
                <td colSpan={3}>Chargement...</td>
              </tr>
            )}
            {articleStore.articles &&
              articleStore.articles.map((a) => (
                <tr key={a.id}>
                  <td className="name">{a.name}</td>
                  <td className="price text-right">{a.price} €</td>
                  <td className="qty text-right">{a.qty}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
