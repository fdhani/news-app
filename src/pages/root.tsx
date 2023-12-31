import { RouteObject } from "react-router-dom";
import Home from "./Home";
import ArticleDetail from "./ArticleDetail";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    // path: "/:title",
    path: "/article-detail",
    element: <ArticleDetail />,
  },
];

export default Routes;
