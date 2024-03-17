import { create } from "zustand";
import { api } from "./api";
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
    const articles = await api.getArticles();
    set({ articles });
  },
  async add(newArticle: NewArticle) {
    await api.add(newArticle);
  },
  async remove(selectedArticles: Set<Article["id"]>) {
    await api.remove([...selectedArticles]);
  },
}));
