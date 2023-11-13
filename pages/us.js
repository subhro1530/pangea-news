// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import USNews from "@/components/USNews";

const US = () => {
  return (
    <div>
      <Head>
        <title>US News | Pangea</title>
      </Head>
      <Navbar />
      <USNews />
      <Footer />
    </div>
  );
};
export default US;
