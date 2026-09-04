import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }

        return res.json();
      })
      .then((res) => {
        console.log("API response:", res);
        setData(res[currency] || {});
      })
      .catch((error) => {
        console.error("Currency API error:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
