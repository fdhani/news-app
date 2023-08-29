import { useArticleListContext } from "../context/articleList";

const useGetArticleList = () => {
  const [articleList] = useArticleListContext();

  return articleList;
};

export default useGetArticleList;
