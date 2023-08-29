import { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import ArticleListWrapper from "./components/ArticleListWrapper";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
import useGetArticleList from "./usecases/use-get-article-list";
import ArticleListProvider from "./context/articleList";
import ArticleCardLoader from "./components/ArticleCard/Loader";

function HomeView() {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const { data, loading } = useGetArticleList();

  return (
    <>
      <Search onHistoryClick={() => setDisplayDrawer(true)} />
      <Drawer display={displayDrawer} onClose={() => setDisplayDrawer(false)} />
      <ArticleListWrapper>
        {loading
          ? Array.from(new Array(10)).map((_, idx) => (
              <ArticleCardLoader
                columnSpan={idx === 0 || idx % 5 === 0 ? 2 : 1}
              />
            ))
          : data?.map((articleItem, idx) => {
              const { description, title, urlToImage, url, source } =
                articleItem;
              return (
                <ArticleCard
                  columnSpan={idx === 0 || idx % 5 === 0 ? 2 : 1}
                  title={title}
                  source={source.name}
                  description={description}
                  imgUrl={urlToImage}
                  url={url}
                />
              );
            })}
      </ArticleListWrapper>
    </>
  );
}

const ContextWrapper = () => (
  <ArticleListProvider>
    <HomeView />
  </ArticleListProvider>
);

export default ContextWrapper;
