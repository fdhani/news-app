import useLocalStorage from "@/repository/useLocalStorage";
import { KEY } from "@/pages/Home/models/repository/visited-article-history/constants";
import { ArticleCardInterface } from "../../models/components/article-card";

const useVisitedArticleHistory = () => {
  const { setItem, getItem } = useLocalStorage<ArticleCardInterface[]>(KEY);

  const tGetItem = () => {
    const data = getItem();

    if (data) {
      return data;
    }

    return [];
  };

  return {
    setItem,
    getItem: tGetItem,
  };
};

export default useVisitedArticleHistory;
