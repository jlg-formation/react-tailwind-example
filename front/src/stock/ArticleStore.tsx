import { create } from "zustand";
import { sleep } from "../utils";
import { Article, NewArticle } from "./interfaces/Article";

interface ArticleState {
  remove(selectedArticles: Set<string>): Promise<void>;
  add(newArticle: NewArticle): Promise<void>;
  articles: Article[] | undefined;
  refresh: () => Promise<void>;
}

export const useArticleStore = create<ArticleState>((set) => ({
  articles: undefined,
  refresh: async () => {
    await sleep(2000);
    set((state) => {
      if (state.articles === undefined) {
        return {
          articles: [
            { id: "a1", name: "Tournevis", price: 2.66, qty: 123 },
            { id: "a2", name: "Marteau", price: 3, qty: 78 },
          ],
        };
      }
      return state;
    });
  },
  async add(newArticle: NewArticle) {
    await sleep(300);
    set((state) => {
      const article: Article = { ...newArticle, id: crypto.randomUUID() };
      if (state.articles === undefined) {
        return { articles: [article] };
      }
      return { articles: [...state.articles, article] };
    });
  },
  async remove(selectedArticles: Set<Article["id"]>) {
    await sleep(300);
    set((state) => {
      if (state.articles === undefined) {
        return state;
      }
      const articles = state.articles.filter(
        (a) => !selectedArticles.has(a.id)
      );
      return { articles };
    });
  },
}));
