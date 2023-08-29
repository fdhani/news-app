import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styArticleDetailContainer, styleArticleDetailHeader } from "./styles";
import useGetArticleTitle from "./usecases/use-get-article-title";

function ArticleDetailContainer() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const title = useGetArticleTitle(state?.title);

  useEffect(() => {
    /**
     * Because this page is dependent on the main page
     * to send the article detail data through location.state,
     * if it was accessed directly we should redirect the user back to the main page
     */
    if (!state) {
      navigate("/", {
        replace: true,
      });
    }
  }, [state]);

  const handleBackClick = () => {
    navigate(-1);
  };

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
      <h1>{title}</h1>
      <p>{state?.content}</p>
    </div>
  );
}

export default ArticleDetailContainer;
