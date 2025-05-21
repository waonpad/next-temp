import { type DependencyList, useCallback, useEffect } from "react";

export const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  deps: DependencyList,
  options?: boolean | AddEventListenerOptions,
) => {
  const memoizedListener = useCallback(listener, deps);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (window) {
      window.addEventListener(type, memoizedListener, options);

      return () => {
        window.removeEventListener(type, memoizedListener, options);
      };
    }
  }, [deps]);
};
