import { useRef } from "react";
import { DrawerPropsInterface } from "@/pages/Home/models/components/drawer";
import useVisitedArticleHistory from "@/repository/visited-article-history";
import {
  styDrawerContainer,
  styArticleHistoryContainer,
  styArticleHistoryHeader,
} from "./styles";
import { useOnClickOutside } from "@/utils/useClickOutside";
import useClearArticleHistory from "../../usecases/use-clear-article-history";

const DrawerContent = (props: DrawerPropsInterface) => {
  const { display, onClose } = props;
  const drawerRef = useRef();
  const { getItem } = useVisitedArticleHistory();
  const clearArticleHistory = useClearArticleHistory();
  useOnClickOutside(drawerRef, () => {
    onClose();
  });

  const handleClearArticleHistoryClick = () => {
    clearArticleHistory();
    onClose();
  };

  return (
    <div
      ref={drawerRef}
      css={styDrawerContainer}
      className={display && "display"}
    >
      <div css={styArticleHistoryContainer}>
        <div css={styArticleHistoryHeader}>
          <h1>Visited Articles</h1>
          <span
            role="presentation"
            onClick={handleClearArticleHistoryClick}
            onKeyDown={handleClearArticleHistoryClick}
            className="material-symbols-outlined"
            style={{
              cursor: "pointer",
            }}
          >
            delete
          </span>
        </div>
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
