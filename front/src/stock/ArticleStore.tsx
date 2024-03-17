import { create } from "zustand";
import { sleep } from "../utils";
import { Article } from "./interfaces/Article";

interface ArticleState {
  articles: Article[] | undefined;
  refresh: () => Promise<void>;
}

export const useArticleStore = create<ArticleState>((set) => ({
  articles: undefined,
  refresh: async () => {
    await sleep(2000);
    set({
      articles: [
        { id: "a1", name: "Tournevis", price: 2.66, qty: 123 },
        { id: "a2", name: "Marteau", price: 3, qty: 78 },
      ],
    });
  },
}));
