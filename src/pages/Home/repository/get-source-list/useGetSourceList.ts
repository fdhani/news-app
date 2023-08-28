import { useEffect, useState } from "react";
import getSourceList from "./api";
import {
  NewsSourceResponse,
  UseGetSourceListResult,
} from "@/pages/Home/models/repository/get-source-list/types";

const useGetArticleList = (): UseGetSourceListResult => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<NewsSourceResponse["sources"] | undefined>(
    undefined,
  );

  useEffect(() => {
    setLoading(true);
    const articleData = getSourceList();
    setTimeout(() => {
      setData(articleData.sources);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading, error: false };
};

export default useGetArticleList;
