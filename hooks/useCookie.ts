import { useEffect, useState } from "react";

function useCookie() {
  const [cookie, setCookie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCookie(
      document.cookie
        .split(";")
        .find((ck) => ck.split("=")[0].toString() === "access_token")
        ?.split("=")[1]
    );
    setLoading(false);
  }, []);
  return {
    cookie,
    loading,
  };
}

export default useCookie;
