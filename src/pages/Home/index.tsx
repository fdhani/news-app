import loadable from "@loadable/component";

const LoadableComponent = loadable(() => import("./HomeContainer"));

export default LoadableComponent;
