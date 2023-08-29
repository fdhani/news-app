export interface NormalizerResponseInterface<T> {
  data: T | undefined;
  loading: boolean;
  error: boolean | string;
}
