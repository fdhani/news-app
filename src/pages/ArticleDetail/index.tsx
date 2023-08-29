import loadable from "@loadable/component";

const LoadableComponent = loadable(() => import("./ArticleDetailContainer"));

export default LoadableComponent;
