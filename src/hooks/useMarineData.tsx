import { useEffect, useState } from 'react';

export interface MarineData {
  id: number;
  name: string;
  type: string;
  location: string;
  observed_at: string;
}

export function useMarineData() {
  const [data, setData] = useState<MarineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/marine-data`);
        if (!res.ok) throw new Error('Failed to fetch marine data');
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}
