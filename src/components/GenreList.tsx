import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}> {genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
