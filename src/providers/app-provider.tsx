"use client";

import { useWatchUnhandledError } from "@/lib/error-boundary/use-watch-unhandled-error";
import type { ReactNode } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  useWatchUnhandledError();

  return <>{children}</>;
};
