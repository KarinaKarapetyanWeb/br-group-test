export type Result<T> = {
  meta: unknown;
  payload: T;
  type: unknown;
};

export type Results<T> = Result<T>[];
