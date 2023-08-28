import {} from "@emotion/react";
import { ArticleCardInterface } from "@/pages/Home/models/components/article-card";
import {
  styArticleContainer,
  styArticleContent,
  styArticleBackground,
  styArticleLink,
} from "./styles";
import useClickArticleCard from "../../usecases/use-click-article-card";

const ArticleCard = (props: ArticleCardInterface) => {
  const { title, description, imgUrl, url, source, columnSpan } = props;

  const clickArticleCard = useClickArticleCard();

  const handleArticleCardClick = () => {
    clickArticleCard(props);
  };

  return (
    <article
      css={[styArticleContainer]}
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
        <h2>
          <a
            onClick={handleArticleCardClick}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </h2>
        <p className="desc">{description}</p>
        <div css={styArticleLink}>
          <p>- {source}</p>
          <a
            onClick={handleArticleCardClick}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
