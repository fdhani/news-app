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
import toSlug from "@/utils/toSlug";

const ArticleCard = (props: ArticleCardInterface) => {
  const { title, description, imgUrl, source, columnSpan } = props;
  const articleTitle = useGetArticleTitle(title);
  const [titleState, setTitleState] = useState(articleTitle);
  const [showPopup, setShowPopup] = useState(false);
  const [newTitleValue, setNewTitleValue] = useState(titleState);

  const articleUrl = `/${toSlug(title)}`;

  const clickArticleCard = useClickArticleCard();
  const editArticleTitle = useEditArticleTitle();

  const handleArticleCardClick = () => {
    clickArticleCard(props);
  };

  const handleArticleEditSaveClick = () => {
    const newTitle = editArticleTitle(title, newTitleValue);

    setShowPopup(false);
    setTitleState(newTitle);
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
            <NavLink onClick={handleArticleCardClick} to={articleUrl}>
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
              onClick={handleArticleCardClick}
              to={articleUrl}
              rel="noreferrer"
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
