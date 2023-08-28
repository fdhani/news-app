import { useRef } from "react";
import { DrawerPropsInterface } from "@/pages/Home/models/components/drawer";
import useVisitedArticleHistory from "@/pages/Home/repository/visited-article-history";
import { styDrawerContainer, styArticleHistoryContainer } from "./styles";
import { useOnClickOutside } from "@/utils/useClickOutside";

const DrawerContent = (props: DrawerPropsInterface) => {
  const { display, onClose } = props;
  const drawerRef = useRef();

  const { getItem } = useVisitedArticleHistory();

  useOnClickOutside(drawerRef, () => {
    onClose();
  });

  return (
    <div
      ref={drawerRef}
      css={styDrawerContainer}
      className={display && "display"}
    >
      <div css={styArticleHistoryContainer}>
        {getItem().map((item) => {
          const { title, source, url } = item;
          return (
            <div className="item">
              <h3>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <p>- {source}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Drawer = (props: DrawerPropsInterface) => {
  const { display } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return display && <DrawerContent {...props} />;
};

export default Drawer;
