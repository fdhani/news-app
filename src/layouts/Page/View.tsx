import { PropsWithChildren } from "react";
import { styPageContainer, styToaster } from "./styles";
import ToasterProvider, { useToaster } from "@/context/toaster";

type Props = PropsWithChildren<Record<string, unknown>>;

const PageView = (props: Props) => {
  const { state } = useToaster();

  const { children } = props;
  return (
    <section css={styPageContainer}>
      {children}
      <div css={styToaster} className={state.display ? "display" : ""}>
        {state.text}
      </div>
    </section>
  );
};

const ContextWrapper = (props: Props) => (
  <ToasterProvider>
    <PageView
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </ToasterProvider>
);

export default ContextWrapper;
