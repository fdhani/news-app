import {
  ArticleListInterface,
  ArticleListParams,
} from "../../models/repository/get-article-list";

const API_KEY = process.env.REACT_APP_API_KEY;

const getArticleList = async (
  params: ArticleListParams,
): Promise<ArticleListInterface> => {
  const { search, sources } = params;

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}
    ${search ? `&q=${search}` : ""}${
      sources ? `&sources=${sources}` : "&country=us"
    }`,
  );

  const response = await res.json();

  return response;
};

export default getArticleList;
