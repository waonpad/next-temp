import { AppProvider } from "@/providers/app-provider";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <main className="flex grow flex-col">{children}</main>
    </AppProvider>
  );
}
