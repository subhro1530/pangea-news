// pages/world.js
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import WorldNews from "@/components/WorldNews";

const World = () => {
  return (
    <div>
      <Head>
        <title>World News | Pangea</title>
      </Head>
      <Navbar />
      <WorldNews />
    </div>
  );
};

export default World;
