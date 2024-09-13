//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string
  }
  
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({data: genres, isLoading: false, error: null}); 

// by using this, the genres data is not coming from the server rather it was made static 
//and keep all the return properties of the useData hooks. 
//By doing doing this we improved the UX and the number of server request. 
// But if i decides to fetch the data from the server, just uncomment 
//the first useGenre and comment out the second one.  

export default useGenres
