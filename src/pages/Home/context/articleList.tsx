import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  ArticleListParams,
  UseGetArticleListResult,
} from "@/models/repository/get-article-list";
import useGetArticleList from "../../../repository/get-article-list/useGetArticleList";

type ContextValueType = [
  UseGetArticleListResult,
  Dispatch<SetStateAction<ArticleListParams>>,
];

const ArticleListContext = createContext<ContextValueType>([
  {
    loading: false,
    error: false,
    data: [],
  },
  () => {},
]);

const ArticleListProvider = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const { children } = props;
  const [params, setParams] = useState({
    search: "",
    sources: "",
  });

  const articleListResponse = useGetArticleList(params);

  const memoizedValue = useMemo<ContextValueType>(
    () => [articleListResponse, setParams],
    [articleListResponse, setParams],
  );

  return (
    <ArticleListContext.Provider value={memoizedValue}>
      {children}
    </ArticleListContext.Provider>
  );
};

export const useArticleListContext = () => useContext(ArticleListContext);

export default ArticleListProvider;
