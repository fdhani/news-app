const useValidateArticleTitle = () => {
  const validateArticleTitle = (articleDetail: string) => {
    if (articleDetail.length < 10) {
      return {
        isValid: false,
        message: "Article detail must be at least 10 characters",
      };
    }

    if (articleDetail.length > 255) {
      return {
        isValid: false,
        message: "Article detail can be no longer than 255 characters",
      };
    }

    return {
      isValid: true,
      message: "",
    };
  };

  return validateArticleTitle;
};

export default useValidateArticleTitle;
