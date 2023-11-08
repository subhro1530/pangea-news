import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Spinner,
  Switch,
  Button, // Import Button component from Chakra UI
} from "@chakra-ui/react";

const apikey = "f5b874a8cc8c944a5ef4fcf58b8a59b9";
const translateApiKey = "YOUR_MICROSOFT_TRANSLATOR_API_KEY"; // Replace with your Microsoft Translator API key

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const [apiCategory, setApiCategory] = useState(["us"]);
  const [apiLanguage, setApiLanguage] = useState(["en"]);
  const [loading, setLoading] = useState(true);
  const [translateEnabled, setTranslateEnabled] = useState(false);

  const handleTranslateToggle = () => {
    setTranslateEnabled((prev) => !prev);
  };

  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post(
        "https://api.cognitive.microsofttranslator.com/translate",
        [
          {
            text,
          },
        ],
        {
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": translateApiKey,
          },
          params: {
            to: targetLanguage,
          },
        }
      );

      return response.data[0].translations[0].text;
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  };

  const handleTranslate = async () => {
    const translatedArticles = await Promise.all(
      articles.map(async (newsHeadline) => {
        const translatedTitle = await translateText(newsHeadline.title, "en");
        const translatedDescription = await translateText(
          newsHeadline.description,
          "en"
        );
        const translatedContent = await translateText(
          newsHeadline.content,
          "en"
        );

        return {
          ...newsHeadline,
          title: translatedTitle,
          description: translatedDescription,
          content: translatedContent,
        };
      })
    );

    setArticles(translatedArticles);
  };

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        let url =
          "https://gnews.io/api/v4/top-headlines?category=" +
          apiCategory +
          "&lang=" +
          apiLanguage +
          "&apikey=" +
          apikey;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setArticles(data.articles);
          });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top stories:", error);
        setLoading(false);
      }
    };

    fetchTopStories();
  }, [apiCategory, apiLanguage]);

  useEffect(() => {
    if (translateEnabled) {
      handleTranslate();
    }
  }, [translateEnabled]);

  return (
    <VStack
      p="20px 50px"
      bgImage="url('https://static.vecteezy.com/system/resources/thumbnails/013/654/649/original/3d-virtual-tv-studio-news-backdrop-for-tv-shows-tv-on-wall-3d-virtual-news-studio-background-loop-free-video.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
    >
      <Box>
        <Heading fontWeight={300} mb={5} fontSize="50px" color="white">
          Top Stories For You
        </Heading>
        <Switch
          colorScheme="teal"
          size="lg"
          onChange={handleTranslateToggle}
          isChecked={translateEnabled}
        >
          Translate to English
        </Switch>
      </Box>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        articles.map((newsHeadline) => (
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
            {/* ... (unchanged code for displaying news articles) */}
          </Box>
        ))
      )}
      <Link href="/translate" passHref>
        <Button colorScheme="teal" size="lg" mt={5}>
          Translate Page to English
        </Button>
      </Link>
    </VStack>
  );
};

export default TopStories;
