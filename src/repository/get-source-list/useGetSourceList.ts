import { useEffect, useState } from "react";
import getSourceList from "./api";
import {
  NewsSourceResponse,
  UseGetSourceListResult,
} from "@/models/repository/get-source-list/types";

const useGetSourceList = (): UseGetSourceListResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<NewsSourceResponse["sources"] | undefined>(
    undefined,
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const sourceData = await getSourceList();
      setData(sourceData.sources);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetSourceList;
