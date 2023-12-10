// pages/index.js
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Container,
  Heading,
  Text,
  HStack,
  Flex,
  VStack,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import TopStories from "@/components/TopStories";
import Link from "next/link";
import DownloadApp from "@/components/DownloadApp";

const Home = () => {
  const handleExploreClick = () => {
    const topStoriesSection = document.getElementById("topStoriesSection");

    if (topStoriesSection) {
      topStoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          justify="space-between"
          align="center"
          h="100%"
          px={{ base: 4, md: 8 }}
        >
          <VStack
            spacing={4}
            align="start"
            color="white"
            textAlign="start"
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
              id="exploreBtn"
              _hover={{ bg: "teal.600" }}
              size="lg"
              onClick={handleExploreClick}
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
      <TopStories />
      <HStack overflow="hidden" width="100vw" height="80vh">
        <VStack width="50%" height="100%">
          <Box
            as="h2"
            textAlign="center"
            fontWeight="200"
            fontSize="40px"
            m={0}
            pt={5}
            color="black"
          >
            A Subsidary of ACNS
          </Box>
          <Box p={5} overflow="scroll">
            ACNS is a dynamic company excelling in web development, graphic
            design, and robust security solutions. Founded by the accomplished
            entrepreneur Shaswata Saha, who boasts an impressive portfolio of
            successful ventures, including the innovative Pangea News. With 2.5
            years of hands-on experience, Shaswata brings a wealth of skills in
            project management, coding proficiency, creative design, and a keen
            understanding of cybersecurity. For any inquiries or collaborations,
            reach out to Shaswata Saha at{" "}
            <Link href="mailto:shaswata.ssaha@gmail.com">
              shaswata.ssaha@gmail.com.
            </Link>
            Elevate your digital presence with ACNS, where expertise meets
            innovation.
          </Box>
        </VStack>
        <iframe
          margin="0px"
          width="100%"
          height="160%" // 16:9 aspect ratio (9/16 = 56.25)
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNxOPcFMb0Rt3QQJQ8jdWuf%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D35-6%26viewport%3D1708%252C174%252C0.26%26t%3Db7rCFiNeEdWcGElX-1%26scaling%3Dscale-down%26starting-point-node-id%3D35%253A6%26mode%3Ddesign&hide-ui=1&chrome=0"
          allowFullScreen
        ></iframe>
      </HStack>
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Home;
