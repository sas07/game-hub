import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";


export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Genre {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
  }
  
  interface GenresResponse {
    count: number;
    results: Genre[];
  }
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<GenresResponse>("/genres", { signal: controller.signal })
          .then((res) => {setGenres(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false)
          });
    
        return () => controller.abort();
      }, []);

      return {genres, error, isLoading};
    
}

export default useGenres
