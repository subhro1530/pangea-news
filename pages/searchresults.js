// pages/searchResults.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";

const SearchResults = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (q) {
        const apiKey = "17e5786f01adec6fc3b5c4421cf147d1";
        const url = `https://gnews.io/api/v4/search?q=${q}&apikey=${apiKey}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          setSearchResults(data.articles || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      }
    };

    fetchSearchResults();
  }, [q]);

  return (
    <Container>
      <VStack spacing={4} align="start" mt={4}>
        <Heading as="h1" size="xl" fontWeight="bold">
          Search Results for "{q}"
        </Heading>

        {searchResults.map((result, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            {result.image && (
              <Image
                src={result.image}
                alt={result.title}
                mb={4}
                borderRadius="md"
              />
            )}
            <Heading as="h2" size="md" mb={2}>
              <Link href={result.url} isExternal>
                {result.title}
              </Link>
            </Heading>
            <Text color="gray.600">{result.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default SearchResults;
