import type { AxiosError } from "axios";

export type ApiError = {
  errors: {
    [key: string]: string[];
  };
};

export const isAxiosError = (err: any): err is AxiosError<unknown> => {
  return Boolean(err.isAxiosError) && typeof err.config == "object";
};

export const isApiError = (
  err: AxiosError<unknown>
): err is AxiosError<ApiError> => {
  return Boolean(err.response?.data);
};

export const mapToApiErrorMessages = (err: AxiosError<ApiError>) => {
  if (!err.response) return [];

  return Object.entries(err.response.data.errors).reduce(
    (acc, [prop, errors]) => {
      return [...acc, ...errors.map((e) => `${prop} ${e}`)];
    },
    [] as string[]
  );
};

export const getApiErrorMessages = (err: unknown) => {
  if (!isAxiosError(err) || !isApiError(err)) return [];

  return mapToApiErrorMessages(err);
};
