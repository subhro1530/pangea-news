// pages/upload.js
import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import Footer from "@/components/Footer";

const Upload = ({ user }) => {
  return (
    <div>
      <Navbar />
      <Container maxW="100vw" p={0}>
        <UploadBox user={user} />
      </Container>
      <Footer />
    </div>
  );
};

export default Upload;
