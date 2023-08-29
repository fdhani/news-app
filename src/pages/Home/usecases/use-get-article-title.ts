import { useMemo } from "react";
import { EDIT_ARTICLE_TITLE_KEY } from "@/models/repository/edited-article-title/types";
import useLocalStorage from "@/repository/useLocalStorage";
import toSlug from "@/utils/toSlug";

const useGetArticleTitle = (title: string) => {
  const { getItem } = useLocalStorage<Record<string, string>>(
    EDIT_ARTICLE_TITLE_KEY,
  );

  const articleTitle = useMemo(() => {
    const editedTitles = getItem();

    const titleSlug = toSlug(title);

    if (editedTitles?.[titleSlug]) {
      return editedTitles[titleSlug];
    }

    return title;
  }, []);

  return articleTitle;
};

export default useGetArticleTitle;
