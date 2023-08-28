import { PropsWithChildren } from "react";
import { styHeaderContainer } from "./styles";

const NavigationView = (props: PropsWithChildren<Record<string, unknown>>) => {
  const { children } = props;
  return (
    <>
      <header css={styHeaderContainer}>
        <h1>The Daily Bugle</h1>
      </header>
      {children}
    </>
  );
};

export default NavigationView;
