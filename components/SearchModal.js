// components/SearchModal.js
import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();
  const toast = useToast();
  const router = useRouter();
  const timeoutRef = useRef();

  useEffect(() => {
    if (isOpen) {
      inputRef.current && inputRef.current.focus();
      toast({
        title: "Search",
        description: "Press TAB and start typing to search!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isOpen, toast]);

  const handleSearch = async () => {
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

  const handleInputClick = (e) => {};

  const handleInputBlur = () => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      {/* <ModalOverlay /> */}
      <ModalContent background="rgb(0,0,0,.9)" color="white">
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.300" />
            </InputLeftElement>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              onFocus={() => clearTimeout(timeoutRef.current)}
              onKeyPress={handleKeyPress}
            />
          </InputGroup>
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
