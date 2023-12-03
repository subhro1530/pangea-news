// pages/download/index.js
import { Box, Button, Heading, Image, Flex } from "@chakra-ui/react";
import Typist from "react-typist";
import { useState } from "react";

const DownloadApp = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const handleDownload = () => {
    // Replace 'your-app.apk' with the actual name of your APK file
    const apkFileName = "pangea_news.apk";
    const apkFilePath = `/${apkFileName}`;

    // Create a link element
    const downloadLink = document.createElement("a");
    downloadLink.href = apkFilePath;
    downloadLink.download = apkFileName;

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger the click event to start the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  };

  const handleTypingDone = () => {
    setTimeout(() => {
      setIsTypingDone(true);
    }, 5000);
  };

  const handleResetTyping = () => {
    setTimeout(() => {
      setIsTypingDone(false);
    }, 5000);
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
            {isTypingDone ? (
              <Typist key="reset" onTypingDone={handleResetTyping}>
                Introducing Pangea News App for Android!
              </Typist>
            ) : (
              <Typist key="typing" onTypingDone={handleTypingDone}>
                Introducing Pangea News App for Android!
              </Typist>
            )}
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
          <Button colorScheme="blue" onClick={handleDownload}>
            Download Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default DownloadApp;
