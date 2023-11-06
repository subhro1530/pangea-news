// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  // You can fetch news data and handle it here

  return (
    <div>
      <Head>
        <title>Your News App</title>
        {/* Add other meta tags as needed */}
      </Head>

      <header>
        <h1>Your News App</h1>
      </header>

      <Navbar />

      <main>{/* Content goes here */}</main>
    </div>
  );
};

export default Home;
