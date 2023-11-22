// pages/search.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import SearchNews from "@/components/SearchNews";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const Search = ({}) => {
  const router = useRouter();
  const { query } = router.query;
  const decodedQuery = query ? decodeURIComponent(query) : "";
  return (
    <div>
      <Head>
        <title>Search News | Pangea</title>
      </Head>
      <Navbar />
      <SearchNews searchQuery={decodedQuery} />
      <Footer />
    </div>
  );
};
export default Search;
