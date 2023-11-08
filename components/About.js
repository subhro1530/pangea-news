import { Box, Heading, VStack, Image, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const About = () => {
  const boxRef = useRef(null);
  const degreeRef = useRef(0);

  useEffect(() => {
    const updateGradient = () => {
      degreeRef.current += 0.4;
      if (degreeRef.current >= 360) degreeRef.current = 0;
      boxRef.current.style.backgroundImage = `linear-gradient(${degreeRef.current}deg, black, rgb(60, 0, 150), cyan)`;
    };

    const intervalId = setInterval(updateGradient, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      ref={boxRef}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt="40px"
      pb="40px"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 50, 0.2)"
      />

      <VStack
        align="center"
        justify="center"
        h="100%"
        zIndex="1"
        textAlign="center"
        width="80%"
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "7xl" }}
          fontWeight="300"
          mb="40px"
        >
          About Pangea News
        </Heading>

        <VStack spacing={4} p="5px 40px">
          <HStack display="flex" justifyContent="space-evenly" mb="40px">
            <Image
              src="https://www.ceros.com/inspire/wp-content/uploads/sites/5/2019/03/gifrun.gif"
              alt="Image 1"
              width="30%"
              ml="5%"
              objectFit="cover"
              borderRadius="10px"
            />
            <Box width="60%" mr="10%">
              <VStack>
                <Box as="h2" fontSize="50px">
                  Shorts
                </Box>
                <Box color="gray.300">
                  In 50 words, we offer succinct news summaries, distilling key
                  information for a quick update. Our approach ensures that
                  users stay well-informed, covering diverse topics and
                  providing a snapshot of the latest happenings across the globe
                  in a brief and accessible format.
                </Box>
              </VStack>
            </Box>
          </HStack>
          <HStack
            display="flex"
            flexDirection="row-reverse"
            justifyContent="space-evenly"
            mb="40px"
          >
            <Image
              src="https://i.gifer.com/14uB.gif"
              alt="Image 1"
              width="30%"
              ml="5%"
              objectFit="cover"
              borderRadius="10px"
            />
            <Box width="60%" mr="10%">
              <VStack>
                <Box as="h2" fontSize="50px">
                  Breaking News
                </Box>
                <Box color="gray.300">
                  Pangea, your rapid news source, delivers breaking news with
                  unparalleled speed. Stay ahead as we cover the latest events,
                  ensuring you&apos;re informed in real-time. Experience swift
                  and reliable updates on a diverse range of topics, connecting
                  you to the pulse of the world.
                </Box>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
