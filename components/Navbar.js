// components/Navbar.js
import {
  Box,
  Flex,
  Link,
  Spacer,
  Icon,
  useOutsideClick,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navRef = useRef();
  const router = useRouter();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsMobileNavOpen(false);
    setIsUserDropdownOpen(false);
  };

  useOutsideClick({
    ref: navRef,
    handler: (event) => {
      // Check if the click event target is not the search button
      if (!event.target.closest("#searchButton")) {
        closeDropdowns();
      }
    },
  });

  return (
    <Flex
      bgColor="rgb(0,0,0,.85)"
      boxShadow="lg"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Box>
        <Link href="/" fontSize="2xl" fontWeight="bold" color="white">
          <Image src="/hori.png" width={150} height={100}></Image>
        </Link>
      </Box>

      <Spacer />

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        width={{ base: "100%", md: "auto" }}
      >
        <Link
          href="/"
          mr={4}
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          Home
        </Link>
        <Link
          href="/world"
          mr={4}
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          World
        </Link>
        <Link
          href="/business"
          mr={4}
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          Business
        </Link>
        <Link
          href="/health"
          mr={4}
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          Health
        </Link>
        <Link
          href="/technology"
          mr={4}
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          Technology
        </Link>
        <Link
          href="/sports"
          color="white"
          _hover={{ transform: "translateY(-2px)", color: "cyan" }}
        >
          Sports
        </Link>
      </Box>

      <Spacer />

      <Box display={{ base: "flex", md: "none" }} onClick={toggleMobileNav}>
        <Icon
          as={isMobileNavOpen ? FaTimes : FaBars}
          size="1.5em"
          color="white"
          cursor="pointer"
          zIndex="200"
        />
      </Box>

      {isMobileNavOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.9)"
          position="fixed"
          top="0"
          left={{ base: "10%", md: "0" }}
          h="100%"
          w="100%"
          zIndex="100"
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          ref={navRef}
          transition="0.3s ease-in-out"
          transform="translateX(0)"
        >
          <Box
            as="button"
            onClick={toggleMobileNav}
            position="absolute"
            top={4}
            right={4}
            color="white"
            cursor="pointer"
            fontSize="xl"
            background="transparent"
            border="none"
          >
            <Icon as={FaTimes} mr={5} />
          </Box>
          <Link
            href="/"
            color="white"
            mb={4}
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            Home
          </Link>
          <Link
            href="/world"
            color="white"
            mb={4}
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            World
          </Link>
          <Link
            href="/politics"
            color="white"
            mb={4}
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            Politics
          </Link>
          <Link
            href="/business"
            color="white"
            mb={4}
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            Business
          </Link>
          <Link
            href="/technology"
            color="white"
            mb={4}
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            Technology
          </Link>
          <Link
            href="/sports"
            color="white"
            fontSize="xl"
            _hover={{ transform: "translateY(-2px)", color: "cyan" }}
          >
            Sports
          </Link>
        </Box>
      )}
      {/* <Button
        colorScheme="teal"
        variant="outline"
        mr={4}
        onClick={toggleSearchModal}
        id="searchButton"
      >
        Search
      </Button> */}

      <Box display={{ base: "flex", md: "flex" }} onClick={toggleUserDropdown}>
        <FaUserPlus size="1.5em" color="white" mr={2} cursor="pointer" />
      </Box>

      {isUserDropdownOpen && (
        <VStack
          bg="rgba(0, 0, 0, 0.9)"
          position="fixed"
          top="4.5rem"
          right="1rem"
          p={5}
          borderRadius="md"
          zIndex="150"
          onClick={closeDropdowns}
        >
          <Link href="/signin" color="white" _hover={{ color: "cyan" }}>
            Sign In
          </Link>
          <Link href="/signup" color="white" _hover={{ color: "cyan" }}>
            Sign Up
          </Link>
          <Link href="/help" color="white" _hover={{ color: "cyan" }}>
            Help
          </Link>
        </VStack>
      )}
      {/* SearchModal */}
      {/* <SearchModal
        isOpen={isSearchModalOpen}
        onClose={toggleSearchModal}
        onSearch={handleSearch}
        onSpeechToText={handleSpeechToText}
      /> */}
    </Flex>
  );
};

export default Navbar;
