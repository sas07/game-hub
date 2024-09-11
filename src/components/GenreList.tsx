import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && null}

      {isLoading && <Spinner />}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg"> {genre.name}</Text>
            </HStack>{" "}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
