// pages/index.js
import Head from "next/head";

import { useRouter } from "next/router";
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
import Footer from "@/components/Footer";
import About from "@/components/About";
import TopStories from "@/components/TopStories";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Pangea News</title>
      </Head>

      <Navbar zIndex={1000} />

      <Container
        maxW="100vw"
        h={{ base: "100vh", md: "100vh" }}
        bg="url('https://wallpapers.com/images/hd/dark-aesthetic-world-map-w1svazb2ay69orbw.jpg') center/cover fixed"
        position="relative"
        bgColor="black"
        backgroundAttachment="fixed"
        zIndex={800}
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
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "7xl" }}
              fontWeight="350"
              textShadow="2px 2px rgb(0,0,0,.2)"
              mb={4}
            >
              Welcome to Pangea News
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="medium"
              color="gray.300"
              mb={8}
            >
              Embark on a journey through the latest international news,
              offering insights into global events. Stay informed on diverse
              topics such as politics, business, technology, sports, and more.
            </Text>

            <Button
              bg="teal.400"
              color="white"
              _hover={{ bg: "teal.600" }}
              size="lg"
            >
              Explore
            </Button>
          </VStack>

          <Image
            src="https://blog.flixel.com/wp-content/uploads/2016/04/spacecinemagraph.gif"
            alt="Your GIF"
            objectFit="cover"
            boxShadow="2px 2px 10px  rgb(0,0,0,.8)"
            borderRadius="50%"
            width="30vw"
            height="30vw"
          />
        </Flex>
      </Container>
      <About />
      {/* <TopStories /> */}
      <Footer />
    </div>
  );
};

export default Home;
