"use client";

import type { ReactNode } from "react";
import { useWatchUnhandledError } from "@/lib/error-boundary/use-watch-unhandled-error";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  useWatchUnhandledError();

  return <>{children}</>;
};
