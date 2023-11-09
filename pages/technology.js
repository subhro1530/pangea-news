// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import TechnologyNews from "@/components/TechnologyNews";
import Footer from "@/components/Footer";

const Health = () => {
  return (
    <div>
      <Head>
        <title>Tech News | Pangea</title>
      </Head>
      <Navbar />
      <TechnologyNews />
      <Footer />
    </div>
  );
};
export default Health;
