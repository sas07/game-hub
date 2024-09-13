// import useData from "./useData";
import parentPlatforms from "../data/parentPlatforms"

export interface Platform {
    id: number;
    name: string;
    slug: string
  }
  
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => ({data: parentPlatforms, error: null});

export default usePlatforms
