// pages/world.js
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TopStories from "../components/TopStories";

const World = () => {
  return (
    <div>
      <Head>
        <title>Pangea News</title>
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
