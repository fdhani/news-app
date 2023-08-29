import { useRef, useState, useEffect } from "react";

interface Params {
  value: unknown;
  delay?: number;
  cb?: () => void;
}

export default function useDebounce({ value, delay = 500, cb }: Params) {
  const [debounceValue, setDebounceValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previousValue.current !== value) {
        setDebounceValue(value);
        previousValue.current = value;

        if (cb) {
          cb();
        }
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, cb]);

  return debounceValue;
}
