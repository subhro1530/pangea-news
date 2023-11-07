// components/Navbar.js
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      bg="gray.800"
      p={4}
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Box>
        <Link href="/" fontSize="xl" color="white">
          Your Logo
        </Link>
      </Box>

      <Spacer />

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        width={{ base: "100%", md: "auto" }}
      >
        <Link href="/" mr={4} color="white">
          Home
        </Link>
        <Link href="/world" mr={4} color="white">
          World
        </Link>
        <Link href="/politics" mr={4} color="white">
          Politics
        </Link>
        <Link href="/business" mr={4} color="white">
          Business
        </Link>
        <Link href="/technology" mr={4} color="white">
          Technology
        </Link>
        <Link href="/sports" color="white">
          Sports
        </Link>
      </Box>

      <Spacer />

      <Box>
        <FaUserPlus size="1.5em" color="white" mr={2} cursor="pointer" />
        {/* <FaSignInAlt size="1.5em" color="white" cursor="pointer" /> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
