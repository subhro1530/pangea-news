// components/Help.js
import React from "react";
import { Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Help from "@/components/Help";

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
      <Help />
      <Footer />
    </Box>
  );
};

export default Help;
