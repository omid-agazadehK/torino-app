"useLogin";
import { useGetUserData } from "@/core/services/query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "../atoms/Spinner";

function PortectedPage({ children }) {
  const { data, isPending } = useGetUserData();
  const router = useRouter();
  useEffect(() => {
    if (!data && !isPending) {
      router.replace("/");
    }
  }, [data, isPending]);
  if (isPending || !data) {
    return <Spinner className="fixed size-20" />;
  }
  return { children };
}

export default PortectedPage;
