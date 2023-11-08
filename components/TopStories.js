import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "6216cb452694485aa18c953891532050",
            },
          }
        );

        setTopStories(response.data.articles.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top stories:", error);
        setLoading(false);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <VStack
      // mt={8}
      p="20px 50px"
      bgImage="url('https://static.vecteezy.com/system/resources/thumbnails/013/654/649/original/3d-virtual-tv-studio-news-backdrop-for-tv-shows-tv-on-wall-3d-virtual-news-studio-background-loop-free-video.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
    >
      <Box as="h1" fontWeight={300} mt={5} mb={5} fontSize="50px" color="white">
        Top Stories For You
      </Box>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        topStories.map((story) => (
          <Box
            key={story.title}
            p={4}
            bgColor="#0d0d0d"
            borderRadius="md"
            boxShadow="md"
            width="50vw"
            transition="transform 0.2s"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          >
            <Link href={story.url} isExternal>
              <Image
                src={story.urlToImage}
                alt={story.title}
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
                {story.title}
              </Heading>
            </Link>
            <Text fontSize="sm" color="grey">
              {story.description}
            </Text>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default TopStories;
