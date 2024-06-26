import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData=async()=>{
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error("Could not get information");
         }
         const result = await response.json();
         setData(result.data);
         setLoading(false);
       } catch (error) {
         setError(error.message);
         setLoading(false);
       }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
};
