import { useNavigate, useParams } from "react-router-dom";
import useGetArticleDetail from "./usecases/use-get-article-detail";
import toTitle from "@/utils/toTitle";
import { styArticleDetailContainer, styleArticleDetailHeader } from "./styles";

function ArticleDetailContainer() {
  const params = useParams<{ title: string }>();
  const navigate = useNavigate();
  const { data, loading } = useGetArticleDetail({
    sources: "",
    search: toTitle(params.title),
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) return <div>...loading</div>;

  return (
    <div css={styArticleDetailContainer}>
      <div css={styleArticleDetailHeader}>
        <div
          role="button"
          tabIndex={0}
          className="back"
          onClick={handleBackClick}
          onKeyDown={handleBackClick}
        >
          <i className="material-symbols-outlined">arrow_back</i>
          <span>Go Home</span>
        </div>
      </div>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  );
}

export default ArticleDetailContainer;
