// components/SearchBar.js
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ onSearch, onSpeechToText, isVisible }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleSpeechToText = () => {
    onSpeechToText();
  };

  return (
    <Box mt={50} display={isVisible ? "block" : "none"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
        />
        <Icon as={FaSearch} color="gray.300" />
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          bgColor="transparent"
          color="white"
          border="none"
          borderBottom="1px solid white"
        />
      </InputGroup>
      <Icon
        as={FaMicrophone}
        size="1.5em"
        color="white"
        cursor="pointer"
        ml={2}
        onClick={handleSpeechToText}
      />
    </Box>
  );
};

export default SearchBar;
