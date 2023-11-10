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
import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";


const SearchModal = ({ isOpen, onClose, onSearch, onSpeechToText }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();
  const toast = useToast();

  useEffect(() => {
    if (isOpen) {
      // Focus on the input element when the modal opens
      inputRef.current && inputRef.current.focus();
      // Optionally show a toast message when the modal opens
      toast({
        title: "Search",
        description: "Start typing to search!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isOpen, toast]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the modal and closing it
  };

  const handleInputBlur = (e) => {
    // Delay the modal close to allow the search button to be clicked
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSearch}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaSearch} color="gray.300" />}
              />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
              />
            </InputGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" type="submit">
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
