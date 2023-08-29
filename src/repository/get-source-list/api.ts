import { NewsSourceResponse } from "@/models/repository/get-source-list/types";

const API_KEY = process.env.REACT_APP_API_KEY;

const geSourceList = async (): Promise<NewsSourceResponse> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}&language=en`,
  );

  const response = await res.json();

  return response;
};

export default geSourceList;
