import { useState } from "react";
import {} from "@emotion/react";
import { NavLink } from "react-router-dom";
import { ArticleCardInterface } from "@/pages/Home/models/components/article-card";
import {
  styArticleContainer,
  styArticleContent,
  styArticleBackground,
  styArticleLink,
  styEditArticleTitleContainer,
  styArticleTitle,
  styEditArticleTitleOverlay,
} from "./styles";
import useClickArticleCard from "../../usecases/use-click-article-card";
import useEditArticleTitle from "../../usecases/use-edit-article-title";
import useGetArticleTitle from "../../usecases/use-get-article-title";
import useValidateArticleTitle from "../../usecases/use-validate-article-title";
import { useToaster } from "@/context/toaster";

const ArticleCard = (props: ArticleCardInterface) => {
  const { title, description, imgUrl, source, columnSpan } = props;
  const articleTitle = useGetArticleTitle(title);
  const [titleState, setTitleState] = useState(articleTitle);
  const [showPopup, setShowPopup] = useState(false);
  const [newTitleValue, setNewTitleValue] = useState(titleState);
  const { showToaster } = useToaster();

  const clickArticleCard = useClickArticleCard();
  const editArticleTitle = useEditArticleTitle();
  const validateArticleTitle = useValidateArticleTitle();

  const handleArticleCardClick = () => {
    clickArticleCard(props);
  };

  const handleArticleEditSaveClick = () => {
    const newTitle = editArticleTitle(title, newTitleValue);

    const { isValid, message } = validateArticleTitle(newTitle);

    if (isValid) {
      setTitleState(newTitle);
      setShowPopup(false);
    } else {
      showToaster(message);
    }
  };

  const handleArticleEditClick = () => {
    setShowPopup(true);
  };

  const handleArticleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitleValue(e.target.value);
  };

  return (
    <>
      <article
        css={styArticleContainer}
        className={columnSpan >= 2 ? "vertical" : "horizontal"}
        style={{
          gridColumn: `span ${columnSpan}`,
        }}
      >
        <div
          css={styArticleBackground}
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        <div css={styArticleContent}>
          <h2
            css={styArticleTitle}
            style={{
              position: "relative",
            }}
          >
            <NavLink
              state={props}
              onClick={handleArticleCardClick}
              to="/article-detail"
            >
              <span className="title-wrapper">{titleState}</span>
            </NavLink>
            <button type="button" onClick={handleArticleEditClick}>
              <span className="material-symbols-outlined">edit</span>
            </button>
          </h2>
          <p className="desc">{description}</p>
          <div css={styArticleLink}>
            <p>- {source}</p>
            <NavLink
              state={props}
              onClick={handleArticleCardClick}
              to="/article-detail"
            >
              Read More
            </NavLink>
          </div>
        </div>
      </article>
      {showPopup && (
        <>
          <div
            role="presentation"
            css={styEditArticleTitleOverlay}
            onClick={() => setShowPopup(false)}
          />
          <div css={styEditArticleTitleContainer}>
            <h2>Edit Title</h2>
            <input onChange={handleArticleEditChange} value={newTitleValue} />
            <button type="button" onClick={handleArticleEditSaveClick}>
              Save Title
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ArticleCard;
