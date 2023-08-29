import {} from "@emotion/react";
import { styArticleLoaderContainer } from "./styles";

interface Props {
  columnSpan: number;
}

const ArticleCardLoader = (props: Props) => {
  const { columnSpan } = props;

  return (
    <article
      css={styArticleLoaderContainer}
      className={columnSpan >= 2 ? "vertical" : "horizontal"}
      style={{
        gridColumn: `span ${columnSpan}`,
      }}
    />
  );
};

export default ArticleCardLoader;
