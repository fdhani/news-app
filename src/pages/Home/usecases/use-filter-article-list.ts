import { useState } from "react";
import { useArticleListContext } from "../context/articleList";
import useDebounce from "@/utils/useDebounce";

const useFilterArticleList = () => {
  const [, setParams] = useArticleListContext();
  const [tempSearch, setTempSearch] = useState("");

  useDebounce({
    value: tempSearch,
    cb: () => {
      setParams((prev) => ({ ...prev, search: tempSearch }));
    },
  });

  const setSearch = (search: string) => {
    setTempSearch(search);
  };

  const setSources = (sources: string[]) => {
    const sourcesString = sources.join(",");

    setParams((prev) => ({ ...prev, sources: sourcesString }));
  };

  return { setSearch, setSources };
};

export default useFilterArticleList;
