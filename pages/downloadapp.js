// pages/world.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

const Download = () => {
  return (
    <div>
      <Head>
        <title>Download Our App | Pangea</title>
      </Head>
      <Navbar />
      <DownloadApp />
      <Footer />
    </div>
  );
};
export default Download;
