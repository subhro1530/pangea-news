// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import HealthNews from "@/components/HealthNews";
import Footer from "@/components/Footer";

const Health = () => {
  return (
    <div>
      <Head>
        <title>Health News | Pangea</title>
      </Head>
      <Navbar />
      <HealthNews />
      <Footer />
    </div>
  );
};
export default Health;
