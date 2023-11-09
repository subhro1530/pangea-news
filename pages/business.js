// pages/business.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import BusinessNews from "@/components/BusinessNews";
import Footer from "@/components/Footer";

const Business = () => {
  return (
    <div>
      <Head>
        <title>Business News | Pangea</title>
      </Head>
      <Navbar />
      <BusinessNews />
      <Footer />
    </div>
  );
};
export default Business;
