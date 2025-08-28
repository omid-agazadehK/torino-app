"use client";
import { QueryClient } from "@tanstack/react-query";
function TenStackReactQuery({ childern }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{childern}</QueryClientProvider>
  );
}

export default TenStackReactQuery;
