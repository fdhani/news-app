import { EDIT_ARTICLE_TITLE_KEY } from "@/models/repository/edited-article-title/types";
import useLocalStorage from "@/repository/useLocalStorage";
import toSlug from "@/utils/toSlug";

const useEditArticleTitle = () => {
  const { getItem, setItem } = useLocalStorage<Record<string, string>>(
    EDIT_ARTICLE_TITLE_KEY,
  );

  const editArticleTitle = (title: string, newTitle: string) => {
    const editedTitles = getItem();
    const newTitles = { ...editedTitles };

    const titleSlug = toSlug(title);

    newTitles[titleSlug] = newTitle;

    setItem(newTitles);
    return newTitle;
  };

  return editArticleTitle;
};

export default useEditArticleTitle;
