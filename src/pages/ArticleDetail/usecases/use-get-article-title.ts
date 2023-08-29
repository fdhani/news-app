import { useMemo } from "react";
import { EDIT_ARTICLE_TITLE_KEY } from "@/models/repository/edited-article-title/types";
import useLocalStorage from "@/repository/useLocalStorage";
import toSlug from "@/utils/toSlug";

const useGetArticleTitle = (title?: string) => {
  const { getItem } = useLocalStorage<Record<string, string>>(
    EDIT_ARTICLE_TITLE_KEY,
  );

  const getTitle = (_title: string) => {
    const editedTitles = getItem();

    const titleSlug = toSlug(_title);

    if (editedTitles?.[titleSlug]) {
      return editedTitles[titleSlug];
    }

    return _title;
  };

  const articleTitle = useMemo(() => {
    if (title) {
      const newTitle = getTitle(title);

      return newTitle;
    }

    return title;
  }, [title, getTitle]);

  return articleTitle;
};

export default useGetArticleTitle;
