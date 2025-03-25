import { useEffect, useState } from 'react';

const KEY =
  'live_deIznTqqTZUYoppiunP57jLykj6MZ8jOhOHNUrN6Yl7tBy4LiyGD8JYvZInEG3vs';

export function useFetchCats(query) {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      const abortController = new AbortController();

      async function fetchCats() {
        try {
          setIsLoading(true);
          setError('');
          setCats([]);

          const res = await fetch(
            `https://api.thecatapi.com/v1/breeds/search?q=${query}&attach_image=1`,
            {
              signal: abortController.signal,
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': KEY,
              },
            }
          );

          if (!res.ok) throw new Error('Something went wrong 😾');

          const data = await res.json();

          if (data.length === 0) throw new Error('No cats found 🐾');

          setCats(data);
        } catch (err) {
          if (err.name !== 'AbortError') setError(err.message);
          setCats([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (!query || query.length < 2) {
        setCats([]);
        setError('');
        return;
      }

      fetchCats();

      return () => abortController.abort();
    },
    [query]
  );

  return { cats, isLoading, error };
}
