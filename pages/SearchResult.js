// SearchResult.js

import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";

const SearchResult = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Use your API key here
        const apiKey = "17e5786f01adec6fc3b5c4421cf147d1";

        // Replace with your search API endpoint
        const url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        setSearchResults(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <VStack p="20px 50px">
      {loading ? (
        <Spinner size="xl" />
      ) : (
        searchResults.map((result, index) => (
          <Box
            key={index}
            p={4}
            bgColor="#0d0d0d"
            borderRadius="md"
            boxShadow="md"
            width="50vw"
            mb={5}
            transition="transform 0.2s"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          >
            <Link href={result.url} isExternal>
              <Image
                src={result.image}
                alt={result.title}
                borderRadius="md"
                mb={4}
              />
              <Heading
                color="white"
                as="h2"
                fontSize="30px"
                fontWeight="300"
                size="md"
                mb={2}
                textDecoration="none"
              >
                {result.title}
              </Heading>
            </Link>
            <Text fontSize="sm" color="grey">
              {result.description}
            </Text>
            <Text fontSize="sm" color="grey">
              {result.content}.
            </Text>
            <Text fontSize="xs" color="white">
              Read more at :
              <Link
                href={result.source.url}
                fontSize="xs"
                fontWeight="bold"
                color="lavenderblush"
                fontStyle="Ubuntu"
                textDecoration="none"
                target="_blank"
              >
                {result.source.url}
              </Link>
            </Text>
            <Text fontSize="xs" color="white">
              Published At : {result.publishedAt}
            </Text>
            <Text fontSize="xs" color="white">
              Source : {result.source.name}
            </Text>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default SearchResult;
