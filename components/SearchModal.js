import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  ModalFooter,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useToast,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.stopPropagation();
    // Fetch search results using GNews API
    const apiKey = "17e5786f01adec6fc3b5c4421cf147d1";
    const url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}&lang=en`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.articles || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      {/* <ModalOverlay /> */}
      <ModalContent background="rgb(0,0,0,.9)" color="white">
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(e);
            }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </form>

          {/* Display search results */}
          {searchResults.length > 0 && (
            <VStack mt={4} align="left">
              {searchResults.map((result, index) => (
                <Box key={index}>
                  {result.image && (
                    <img
                      src={result.image}
                      alt={result.title}
                      style={{ borderRadius: "8px", marginBottom: "8px" }}
                    />
                  )}
                  <Link href={result.url} isExternal>
                    {result.title}
                  </Link>
                </Box>
              ))}
            </VStack>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
          <Button colorScheme="gray" ml={2} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
