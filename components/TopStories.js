// components/TopStories.js
import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "YOUR_NEWS_API_KEY", // Replace with your News API key
            },
          }
        );

        setTopStories(response.data.articles);
      } catch (error) {
        console.error("Error fetching top stories:", error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <VStack mt={8} spacing={8} align="stretch">
      {topStories.map((story) => (
        <Box
          key={story.title}
          p={4}
          bg="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Heading as="h2" size="md" mb={2}>
            {story.title}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {story.description}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default TopStories;
