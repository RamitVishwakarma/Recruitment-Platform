import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (method, url, data, responseType, headers) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method,
      url: `${import.meta.env.VITE_URL}${url}`,
      data,
      responseType,
      headers,
    })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [method, url, data, responseType, headers]);

  return { response, error, loading };
};

export default useAxios;
