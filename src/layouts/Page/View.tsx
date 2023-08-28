import { PropsWithChildren } from "react";
import { styPageContainer } from "./styles";

const PageView = (props: PropsWithChildren<Record<string, unknown>>) => {
  const { children } = props;
  return <section css={styPageContainer}>{children}</section>;
};

export default PageView;
