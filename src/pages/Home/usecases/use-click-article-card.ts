import { ArticleCardInterface } from "../models/components/article-card";
import useVisitedArticleHistory from "@/repository/visited-article-history";

const useClickArticleCard = () => {
  const { setItem, getItem } = useVisitedArticleHistory();
  const clickArticleCard = (articleData: ArticleCardInterface) => {
    const newData = getItem();

    newData.push(articleData);

    setItem(newData);
  };

  return clickArticleCard;
};

export default useClickArticleCard;
