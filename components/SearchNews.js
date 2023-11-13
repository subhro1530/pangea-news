import { useEffect, useState, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Switch,
  Button, // Import Button component from Chakra UI
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchNews = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [nextSearchQuery, setnextSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = useCallback(async () => {
    // Fetch search results using GNews API
    const apiKey = "17e5786f01adec6fc3b5c4421cf147d1";
    const url =
      nextSearchQuery === ""
        ? `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}&lang=en`
        : `https://gnews.io/api/v4/search?q=${nextSearchQuery}&apikey=${apiKey}&lang=en`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.articles || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
      setLoading(false);
    }
  }, [nextSearchQuery, searchQuery]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <VStack
      p="20px 50px"
      bgImage="url('https://c1.wallpaperflare.com/preview/764/96/17/philatelist-stamp-collection-stamp-collecting.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      marginTop="30px"
    >
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
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
              onChange={(e) => setnextSearchQuery(e.target.value)}
            />
            <Button ml={2} colorScheme="blue" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
        </form>
      </Box>
      <Box>
        <Heading fontWeight={300} mb={5} fontSize="50px" color="white">
          Search Results for{" "}
          {nextSearchQuery === "" ? searchQuery : nextSearchQuery}
        </Heading>
      </Box>
      {loading ? (
        <Spinner size="xl" />
      ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
        searchResults.map((newsHeadline) => (
          <Box
            key={newsHeadline.title}
            p={4}
            bgColor="#0d0d0d"
            borderRadius="md"
            boxShadow="md"
            width="50vw"
            transition="transform 0.2s"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          >
            <Link href={newsHeadline.url} isExternal>
              <Image
                src={newsHeadline.image}
                alt={newsHeadline.title}
                borderRadius="md"
                mb={4}
              />
              <Heading
                color="white"
                as="h2"
                fontSize="30px"
                fontWeight="300"
                size="md"
                mb={2}
                textDecoration="none"
              >
                {newsHeadline.title}
              </Heading>
            </Link>
            <Text fontSize="sm" color="grey">
              {newsHeadline.description}
            </Text>
            <Text fontSize="sm" color="grey">
              {newsHeadline.content}.
            </Text>
            <Text fontSize="xs" color="white">
              Read more at :
              <Link
                href={newsHeadline.source.url}
                fontSize="xs"
                fontWeight="bold"
                color="lavenderblush"
                fontStyle="Ubuntu"
                textDecoration="none"
                target="_blank"
              >
                {newsHeadline.source.url}
              </Link>
            </Text>
            <Text fontSize="xs" color="white">
              Published At : {newsHeadline.publishedAt}
            </Text>
            <Text fontSize="xs" color="white">
              Source : {newsHeadline.source.name}
            </Text>
          </Box>
        ))
      ) : (
        <Text color="white">No search results found.</Text>
      )}
    </VStack>
  );
};

export default SearchNews;
