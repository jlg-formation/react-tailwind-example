import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewArticle } from "../interfaces/Article";
import { useArticleStore } from "../ArticleStore";
import { useNavigate } from "react-router-dom";

export default function AddView() {
  const articleStore = useArticleStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewArticle>({
    mode: "onChange",
    defaultValues: {
      name: "Truc",
      price: 0,
      qty: 1,
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewArticle> = async (newArticle) => {
    console.log("newArticle: ", newArticle);
    await articleStore.add(newArticle);
    await articleStore.refresh();
    navigate("..");
  };

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Nom</span>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 12 })}
          />
          <span className="error">
            {errors.name && errors.name.type === "required" && "Champ requis."}
            {errors.name &&
              errors.name.type === "maxLength" &&
              "Champ trop long."}
          </span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" {...register("price", { required: true })} />
          <span className="error">{errors.price && "Champ requis."}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            {...register("qty", { pattern: /\d+/, required: true })}
          />
          <span className="error">{errors.qty && "Champ requis."}</span>
        </label>
        <div className="error"></div>
        <button className="primary" disabled={!isValid}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  );
}
