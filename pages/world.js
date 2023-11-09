// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import WorldNews from "@/components/WorldNews";
import Footer from "@/components/Footer";

const World = () => {
  return (
    <div>
      <Head>
        <title>World News | Pangea</title>
      </Head>
      <Navbar />
      <WorldNews />
      <Footer />
    </div>
  );
};
export default World;
