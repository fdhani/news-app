import { useEffect, useState } from "react";
import getArticleList from "./api";
import {
  ArticleListInterface,
  UseGetArticleListResult,
} from "@/pages/Home/models/repository/get-article-list";

const useGetArticleList = (): UseGetArticleListResult => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<
    ArticleListInterface["articles"] | undefined
  >(undefined);

  useEffect(() => {
    setLoading(true);
    const articleData = getArticleList();
    setTimeout(() => {
      setData(articleData.articles);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading, error: false };
};

export default useGetArticleList;
