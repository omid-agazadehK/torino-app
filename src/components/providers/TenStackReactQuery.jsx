"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "@/core/config/reactQuery";
import { useState } from "react";
function TenStackReactQuery({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions,
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TenStackReactQuery;
