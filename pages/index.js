// pages/index.js
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TopStories from "../components/TopStories";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pangea News</title>
      </Head>

      <Navbar />

      <Container
        maxW="100%"
        h="94vh"
        bg="url('https://wallpapers.com/images/hd/dark-aesthetic-world-map-w1svazb2ay69orbw.jpg') center/cover"
        position="relative"
        bgColor="black"
      >
        <div
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)" // Adjust the opacity and color as needed
        ></div>

        <VStack
          spacing={4}
          align="flex-start" // Align text to the left
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="gray.300" // Suitable text color for black background
          textAlign="left" // Align text to the left
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }} // Increased heading size
            fontWeight="bold"
            mb={4} // Added margin-bottom for separation
          >
            Welcome to Pangea News
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mb={8} // Added margin-bottom for separation
          >
            Explore the latest international news from around the globe. Stay
            informed on politics, business, technology, sports, and more.
          </Text>

          <Button
            bg="teal.500"
            color="white"
            _hover={{ bg: "teal.600" }}
            size="lg"
          >
            Explore
          </Button>
        </VStack>

        {/* Replace '/your-gif.gif' with the actual path to your GIF */}
        <Image
          src="https://blog.flixel.com/wp-content/uploads/2016/04/spacecinemagraph.gif"
          alt="Your GIF"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          objectFit="cover"
          display={{ base: "none", md: "block" }} // Show only on larger screens
        />
      </Container>

      <Container maxW="container.lg" mt={8}>
        <TopStories />
      </Container>
    </div>
  );
};

export default Home;
