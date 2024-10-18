import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams as useNextSearchParams } from "next/navigation";

export function useSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();

  const createQueryString = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      return params.toString();
    },
    [searchParams]
  );

  const removeQueryString = useCallback(
    (value: string | string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      if (typeof value === "string") params.delete(value);
      if (Array.isArray(value)) value.forEach(item => params.delete(item));
      return params.toString();
    },
    [searchParams]
  );

  const setSearchParam = (key: string, value: string) => {
    router.push(pathname + "?" + createQueryString(key, value));
  };

  const removeSearchParam = (values: string | string[]) => {
    router.push(pathname + "?" + removeQueryString(values));
  };

  return { set: setSearchParam, remove: removeSearchParam, searchParams };
}
