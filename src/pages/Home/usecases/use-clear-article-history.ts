import useVisitedArticleHistory from "@/repository/visited-article-history";

const useClearArticleHistory = () => {
  const { setItem } = useVisitedArticleHistory();
  const clearArticleHistory = () => {
    setItem([]);
  };

  return clearArticleHistory;
};

export default useClearArticleHistory;
