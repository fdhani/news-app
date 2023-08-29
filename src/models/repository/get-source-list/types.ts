import { NormalizerResponseInterface } from "../core";

export type NewsSource = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type NewsSourceResponse = {
  status: string;
  sources: NewsSource[];
};

export type UseGetSourceListResult = NormalizerResponseInterface<
  NewsSourceResponse["sources"]
>;
