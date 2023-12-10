import { Box, Button, Heading, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

const DownloadApp = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleDownload = () => {
    const apkFileName = "pangea_news.apk";
    const apkFilePath = `/${apkFileName}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = apkFilePath;
    downloadLink.download = apkFileName;

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handleViewDemo = () => {
    // Open the YouTube video link when "View Demo" is clicked
    window.location.href = "https://youtu.be/NbuqLD3Y200";
  };

  return (
    <Box
      backgroundImage="url('https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.webp?b=1&s=170667a&w=0&k=20&c=e8mSv3z6PhT18EUmzgtdMCbQecYzhHoqu_ts8tFdN6c=')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={{ md: "4rem" }}
    >
      <Box
        backgroundColor="rgba(121,20,192, 0.4)"
        padding="8"
        borderRadius="md"
        textAlign="center"
        width={{ md: "100%" }}
      >
        <Flex flexDirection="column" alignItems="center">
          <Heading fontWeight={300} mb={5} fontSize="50px" color="white">
            Introducing Pangea News App for Android!
          </Heading>
          <Image
            src="/pangea-mobile.png"
            alt="App Image"
            boxSize="200px"
            objectFit="cover"
            borderRadius="md"
            width="90%"
            height="auto"
            mb="4"
          />
          <Flex>
            <Button colorScheme="blue" onClick={handleDownload} mr="2">
              Download Now
            </Button>
            <Button colorScheme="green" onClick={handleViewDemo}>
              View Demo
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DownloadApp;
