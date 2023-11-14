// components/UploadBox.js
import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  useToast,
  Input,
  Textarea,
} from "@chakra-ui/react";

const UploadBox = ({ user }) => {
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to upload news.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please select a file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!heading || !description || !location || !email) {
      toast({
        title: "Incomplete Information",
        description: "Please provide all the required information.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Perform the upload logic here (e.g., using FormData or any library)
    // For now, just show a success toast
    toast({
      title: "Upload Successful",
      description: "Your news has been successfully uploaded!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bgImage="url('https://i.pinimg.com/originals/02/56/5c/02565c33131c9e8a241dd5ae4d97e81e.gif')" // Add your background image URL
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="100%"
      p={8}
    >
      <VStack
        backgroundColor="rgb(0,0,0,0.7)"
        borderRadius={5}
        spacing={8}
        mt={20}
        p={10} // Adjusted margin-bottom to avoid overlap with footer
        color="cyan"
        align="center"
      >
        <Heading as="h1" fontWeight={200} fontSize={50} mt={5} color="white">
          Pangea Exclusive
        </Heading>
        <Text color="white" fontSize={20} fontWeight={200} textAlign="center">
          Welcome to Pangea Exclusive! Upload your news video, provide a proper
          heading, description, location, email, and click on submit.
        </Text>

        {/* File Input */}
        <input type="file" accept="video/*" onChange={handleFileChange} />

        {/* Heading Input */}
        <Input
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        {/* Description Input */}
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Location Input */}
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Submit Button */}
        <Button colorScheme="teal" onClick={handleUpload}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default UploadBox;
