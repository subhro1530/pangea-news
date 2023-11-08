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

const apikey = "f5b874a8cc8c944a5ef4fcf58b8a59b9";

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const [apiCategory, setapiCategory] = useState(["world"]);
  const [apiLanguage, setapiLanguage] = useState(["en"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines",
          {
            params: {
              category: apiCategory,
              lang: apiLanguage,
              apikey: apikey,
            },
          }
        );

        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top stories:", error);
        setLoading(false);
      }
    };

    fetchTopStories();
  }, [apiCategory, apiLanguage]);
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
        articles.map((newsHeadline) => (
          <Box
            key={newsHeadline.title}
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
            <Link href={newsHeadline.url} isExternal>
              <Image
                src={newsHeadline.image}
                alt={newsHeadline.title}
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
                {newsHeadline.title}
              </Heading>
            </Link>
            <Text fontSize="sm" color="grey">
              {newsHeadline.description}
            </Text>
            <Text fontSize="sm" color="grey">
              {newsHeadline.content}.
            </Text>
            <Text fontSize="xs" color="white">
              Read more at :
              <Link
                href={newsHeadline.source.url}
                fontSize="xs"
                fontWeight="bold"
                color="lavenderblush"
                fontStyle="Ubuntu"
                textShadow="2px -1px 4px white"
                textDecoration="none"
                target="_blank"
              >
                {newsHeadline.source.url}
              </Link>
            </Text>
            <Text fontSize="xs" color="white">
              Published At : {newsHeadline.publishedAt}
            </Text>
            <Text fontSize="xs" color="white">
              Source : {newsHeadline.source.name}
            </Text>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default TopStories;
