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
        description: "Click TAB and start typing to search!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isOpen, toast]);

  const handleSearch = () => {
    // Redirect to the search results page using Next.js router
    router.push(`/searchResults?q=${searchQuery}`);
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      size="sm"
    >
      <ModalContent>
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
