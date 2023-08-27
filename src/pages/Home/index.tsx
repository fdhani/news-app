import loadable from "@loadable/component";

const LoadableComponent = loadable(() => import("./View"));

export default LoadableComponent;
