"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function TenStackReactQuery({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5, retry: 1 } },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TenStackReactQuery;
