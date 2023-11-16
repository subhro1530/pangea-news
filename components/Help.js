// components/Help.js
import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Help = () => {
  return (
    <Box
      bgColor="black"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Navbar />
      <Box
        width="80vw"
        p={8}
        mt={20}
        borderRadius="md"
        bgImage="url('/dark-background-image.jpg')" // Replace with your actual image path
        bgSize="cover"
      >
        <Heading
          textAlign="center"
          as="h2"
          size="xl"
          fontWeight={200}
          fontSize="50px"
          color="white"
          mb={10}
        >
          Help Center
        </Heading>

        {/* Provide information or instructions here */}
        <Box mb={8}>
          <Text color="white" fontSize="xl" mb={4}>
            Welcome to the Help Center of Pangea News, founded by Shaswata Saha,
            founder of ACNS along with Pratham Aggarwal. If you have any questions or need assistance,
            please refer to the following information:
          </Text>

          <Box>
            <Text color="white" fontSize="lg" mb={2}>
              1. How to use Pangea News?
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              Turn on our notification to get the news everytime about anywhere.
            </Text>
          </Box>

          <Box>
            <Text color="white" fontSize="lg" mb={2}>
              2. Contact Support
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              If you encounter any issues or have specific inquiries, you can
              reach out to our support team at{" "}
              <a href="mailto:shaswata.ssaha@gmail.com" style={{ color: "cyan" }}>
                shaswata.ssaha@gmail.com
              </a>
              .
            </Text>
          </Box>

          <Box>
            <Text color="white" fontSize="lg" mb={2}>
              3. Report Issues
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              To report any bugs or problems with the app, please use the "Report
              Issue" feature within the app or send an email to{" "}
              <a href="mailto:issues@pangeanews.com" style={{ color: "cyan" }}>
                issues@pangeanews.com
              </a>
              .
            </Text>
          </Box>

          {/* Add more sections based on your app's features or requirements */}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Help;
