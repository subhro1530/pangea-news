// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1666361221204494"
            crossorigin="anonymous"
          ></script>
          {/* Include your logo or any other meta tags or styles here */}
          <link rel="icon" href="/icon.png" />
          <link rel="shortcut icon" href="/icon.png" type="image/png" />
          {/* Add other meta tags as needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
