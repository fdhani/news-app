import { useCallback, useEffect, useState } from "react";
import getArticleList from "./api";
import {
  ArticleListInterface,
  ArticleListParams,
  UseGetArticleListResult,
} from "@/models/repository/get-article-list";

const useGetArticleList = (
  params: ArticleListParams,
): UseGetArticleListResult => {
  const { search, sources } = params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<
    ArticleListInterface["articles"] | undefined
  >(undefined);

  const fetchData = useCallback(async (fetchDataParam: ArticleListParams) => {
    try {
      setError(false);
      setLoading(true);
      const articleData = await getArticleList(fetchDataParam);
      setData(articleData.articles);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData({ search, sources });
  }, [search, sources, fetchData]);

  return { data, loading, error };
};

export default useGetArticleList;
