import { PropsWithChildren } from "react";
import { styArticleListContainer } from "./styles";

const ArticleCard = (props: PropsWithChildren<Record<string, unknown>>) => {
  const { children } = props;

  return <section css={styArticleListContainer}>{children}</section>;
};

export default ArticleCard;
