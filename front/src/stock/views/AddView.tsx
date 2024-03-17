import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewArticle } from "../interfaces/Article";

export default function AddView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewArticle>({
    defaultValues: {
      name: "Truc",
      price: 0,
      qty: 1,
    },
  });

  const onSubmit: SubmitHandler<NewArticle> = (newArticle) => {
    console.log("newArticle: ", newArticle);
  };

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Nom</span>
          <input type="text" {...register("name", { required: true })} />
          <span className="error">{errors.name && "Champs requis."}</span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" {...register("price", { required: true })} />
          <span className="error">{errors.price && "Champs requis."}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            {...register("qty", { pattern: /\d+/, required: true })}
          />
          <span className="error">{errors.qty && "Champs requis."}</span>
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
