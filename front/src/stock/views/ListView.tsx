import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useArticleStore } from "../ArticleStore";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/Article";
import { sleep } from "../../utils";
import AsyncButton from "../../widgets/AsyncButton";

export default function ListView() {
  const articleStore = useArticleStore();
  const [selectedArticles, setSelectedArticles] = useState(
    new Set<Article["id"]>()
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    console.log("checking if articles is undefined");
    if (articleStore.articles === undefined) {
      articleStore.refresh();
    }
  }, [articleStore]);

  const handleRefresh = async () => {
    console.log("handleRefresh");
    await sleep(300);
    // throw new Error("oups...error!");
    await articleStore.refresh();
    console.log("refreshed");
  };

  const handleRemove = async () => {
    console.log("handleRemove");
    await sleep(300);
    await articleStore.remove(selectedArticles);
    await articleStore.refresh();
    console.log("removed");
  };

  const select = (a: Article) => () => {
    selectedArticles.has(a.id)
      ? selectedArticles.delete(a.id)
      : selectedArticles.add(a.id);
    setSelectedArticles(new Set(selectedArticles));
  };

  const resetErrorMsg = () => {
    setErrorMsg("");
  };

  const handleErrorMsg = (err: unknown) => {
    if (err instanceof Error) {
      setErrorMsg(err.message);
    }
  };

  return (
    <main>
      <h1>Liste des articles</h1>
      <div>
        <nav className="flex gap-1">
          <AsyncButton
            title="Rafraîchir"
            action={handleRefresh}
            icon={faRotateRight}
            onStart={resetErrorMsg}
            onAsyncError={handleErrorMsg}
          />
          <Link to="/stock/add" title="Ajouter" className="button">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          {selectedArticles.size > 0 && (
            <AsyncButton
              title="Supprimer"
              action={handleRemove}
              icon={faTrashAlt}
              onStart={resetErrorMsg}
              onAsyncError={handleErrorMsg}
            />
          )}
        </nav>
        <div className="flex items-center h-8 font-bold">{errorMsg}</div>
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
                <tr
                  key={a.id}
                  onClick={select(a)}
                  className={selectedArticles.has(a.id) ? "selected" : ""}
                >
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
