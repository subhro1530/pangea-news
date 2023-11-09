// components/SearchModal.js
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import SearchBar from "./SearchBar";

const SearchModal = ({ isOpen, onClose, onSearch, onSpeechToText }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SearchBar onSearch={onSearch} onSpeechToText={onSpeechToText} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
