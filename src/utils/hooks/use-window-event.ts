import { type DependencyList, useCallback, useEffect } from "react";

export const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  // biome-ignore lint/suspicious/noExplicitAny: 汎用的なフックなため許容
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  deps: DependencyList,
  options?: boolean | AddEventListenerOptions,
) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: 問題無い
  const memoizedListener = useCallback(listener, deps);

  useEffect(() => {
    if (window) {
      window.addEventListener(type, memoizedListener, options);

      return () => {
        window.removeEventListener(type, memoizedListener, options);
      };
    }
  }, [memoizedListener, options, type]);
};
