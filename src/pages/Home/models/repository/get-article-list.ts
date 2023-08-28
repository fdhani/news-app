import { NormalizerResponseInterface } from "./core";

export interface ArticleItemInterface {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticleListInterface {
  status: "ok";
  totalResults: number;
  articles: ArticleItemInterface[];
}

export type UseGetArticleListResult = NormalizerResponseInterface<
  ArticleListInterface["articles"]
>;
