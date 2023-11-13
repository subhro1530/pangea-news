// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import IndiaNews from "@/components/IndiaNews";

const India = () => {
  return (
    <div>
      <Head>
        <title>India News | Pangea</title>
      </Head>
      <Navbar />
      <IndiaNews />
      <Footer />
    </div>
  );
};
export default India;
