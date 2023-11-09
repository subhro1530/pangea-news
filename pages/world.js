// World.js
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TopStories from "../components/TopStories";

const World = () => {
  const [articles, setArticles] = useState([]);
  const [apiCategory] = useState(["world"]);
  const [apiLanguage] = useState(["en"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        let url =
          "https://gnews.io/api/v4/top-headlines?category=" +
          apiCategory +
          "&lang=" +
          apiLanguage +
          "&apikey=" +
          apikey;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setArticles(data.articles);
          });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top stories:", error);
        setLoading(false);
      }
    };

    fetchTopStories();
  }, [apiCategory, apiLanguage]);
  return (
    <div>
      <Head>
        <title>World News | Pangea</title>
      </Head>

      <Navbar />

      <Container
        maxW="100vw"
        h={{ base: "100vh", md: "100vh" }}
        bg="url('https://wallpapers.com/images/hd/dark-aesthetic-world-map-w1svazb2ay69orbw.jpg') center/cover fixed"
        position="relative"
        bgColor="black"
        backgroundAttachment="fixed"
      >
        <Flex
          justify="space-between" // Utilize more space
          align="center"
          h="100%"
          px={{ base: 4, md: 8 }} // Add padding to the left and right
        >
          <VStack
            spacing={4}
            align="start" // Align text to the start
            color="white"
            textAlign="start" // Align text to the start
            w="80%"
            p="0px 20px"
          >
            
          </VStack>
        </Flex>
      </Container>

      <Container maxW="container.lg" mt={8}>
        <TopStories />
      </Container>
    </div>
  );
};

export default World;
