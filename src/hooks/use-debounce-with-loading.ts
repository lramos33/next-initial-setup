import { useEffect, useState } from "react";

export default function useDebounceValueWithLoading<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isLoadingDebounce, setIsLoadingDebounce] = useState(false);

  useEffect(() => {
    if (value) setIsLoadingDebounce(true);

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsLoadingDebounce(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, isLoadingDebounce };
}
