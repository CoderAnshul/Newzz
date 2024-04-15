import { useEffect, useState } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = process.env.VITE_GNEWS_API_KEY;
        const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&token=${apiKey}`;
        const categoryParam = category ? `&topic=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParam + searchParam;
        const res = await fetch(url);
        const data = await res.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch {
        setError(error);
        setLoading(false);
      }
    }
    fetchNewsData()
  }, [category , searchTerm]);

  return {newsData, loading, error}
};

export default useNewsData;
