import { NewsSourceResponse } from "@/models/repository/get-source-list/types";

const geSourceListError = async (): Promise<NewsSourceResponse> => {
  const res = await fetch(`https://newsapi.org/v2/sources?apiKey`);

  const response = await res.json();

  if (res.ok) {
    return response;
  }

  throw new Error(response.message);
};

export default geSourceListError;
