import { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import ArticleListWrapper from "./components/ArticleListWrapper";
import Search from "./components/Search";
import useGetArticleList from "./repository/get-article-list/useGetArticleList";
import Drawer from "./components/Drawer";

function HomeView() {
  const [searchValue, setSearchValue] = useState("");
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const { data, loading } = useGetArticleList();

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Search
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onHistoryClick={() => setDisplayDrawer(true)}
      />
      <Drawer display={displayDrawer} onClose={() => setDisplayDrawer(false)} />
      <ArticleListWrapper>
        {loading
          ? "...loading"
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

export default HomeView;
