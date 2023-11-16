// components/Help.js
import React from "react";
import { Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Help = () => {
  return (
    <Box
      backgroundColor="#210e5e"
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
        bgImage="url('https://preview.redd.it/0bb6dqsiab451.gif?s=b0c65596a54a30708da26669da6e79abf3be1680')" // Replace with your actual image path
        bgSize="cover"
      >
        <Heading
          textAlign="center"
          as="h2"
          size="2xl"
          color="white"
          fontWeight={200}
          fontSize="50px"
          mb={10}
          padding="0px 20px"
        >
          Help Center
        </Heading>

        {/* Provide information or instructions here */}
        <Box mb={8}>
          <Text color="cyan" fontSize="2xl" mb={4} fontWeight={200}>
            Welcome to the Help Center of Pangea News, founded by Shaswata Saha,
            founder of ACNS. If you have any questions or need assistance,
            please refer to the following information:
          </Text>

          <Box>
            <Text fontSize="2xl" color="cyan" mb={2}>
              1. How to use Pangea News?
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              Pangea News is designed for seamless navigation. Simply install
              the app, create an account, and start customizing your news feed
              by choosing your preferred topics and sources in the settings.
            </Text>
          </Box>

          <Box>
            <Text fontSize="2xl" color="cyan" mb={2}>
              2. Frequently Asked Questions
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              Q: How do I customize my news feed?
              <br />
              A: In the app settings, you can choose your preferred topics and
              sources to customize your news feed.
              <br />
              <br />
              Q: Is Pangea News available on multiple platforms?
              <br />
              A: Yes, Pangea News is available on iOS, Android, and the web.
            </Text>
          </Box>

          <Box>
            <Text fontSize="2xl" color="cyan" mb={2}>
              3. Contact Support
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              If you encounter any issues or have specific inquiries, you can
              reach out to our support team at{" "}
              <Link href="mailto:shaswata.ssaha@gmail.com" color="cyan">
                shaswata.ssaha@gmail.com
              </Link>
              . For enquiries usually you will recieve mails between 4-5 working
              days since we have an active developer group who are comitted to
              develop the site as their first priority.
            </Text>
          </Box>

          <Box>
            <Text fontSize="2xl" color="cyan" mb={2}>
              4. Report Issues
            </Text>
            <Text color="white" fontSize="md" mb={4}>
              To report any bugs or problems with the app, please use the
              "Report Issue" feature within the app or send an email to{" "}
              <Link href="mailto:shaswata.ssaha@gmail.com" color="cyan">
                shaswata.ssaha@gmail.com
              </Link>
              with proper screenshots and description of the issue. Since this
              app is currently in development, we expect your understanding .
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Help;
