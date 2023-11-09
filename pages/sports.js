// pages/sports.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import SportsNews from "@/components/SportsNews";
import Footer from "@/components/Footer";

const Sports = () => {
  return (
    <div>
      <Head>
        <title>Sports News | Pangea</title>
      </Head>
      <Navbar />
      <SportsNews />
      <Footer />
    </div>
  );
};
export default Sports;
