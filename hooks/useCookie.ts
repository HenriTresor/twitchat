import { useEffect, useState } from "react";

function useCookie() {
  const [cookie, setCookie] = useState<any>(null);

  useEffect(() => {
    setCookie(
      document.cookie
        .split(";")
        .find((ck) => ck.split("=")[0].toString() === "access_token")
        ?.split("=")[1]
    );
  }, []);
  return {
    cookie,
  };
}

export default useCookie;
