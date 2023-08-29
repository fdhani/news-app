import { ArticleListParams } from "@/models/repository/get-article-list";
import useGetArticleList from "@/repository/get-article-list/useGetArticleList";

const useGetArticleDetail = (params: ArticleListParams) => {
  const res = useGetArticleList(params);

  return {
    ...res,
    data: res?.data?.[0],
  };
};

export default useGetArticleDetail;
