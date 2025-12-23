import type { ReactNode } from "react";
import { AppProvider } from "@/providers/app-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <main className="flex grow flex-col">{children}</main>
    </AppProvider>
  );
}
