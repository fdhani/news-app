import { useCallback, useEffect } from "react";
import type { MutableRefObject } from "react";

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement>,
  handler: (ev: MouseEvent | TouchEvent) => void,
) => {
  const eventListener = useCallback(
    (event: MouseEvent | TouchEvent): void => {
      event.preventDefault();

      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    },
    [handler, ref],
  );

  useEffect(() => {
    if (ref.current) {
      document.addEventListener("mousedown", eventListener);
      document.addEventListener("touchstart", eventListener);
    }

    return () => {
      if (document) {
        document.removeEventListener("mousedown", eventListener);
        document.removeEventListener("touchstart", eventListener);
      }
    };
  }, [ref, handler, eventListener]);
};
