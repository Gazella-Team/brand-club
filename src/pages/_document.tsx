import { Html, Head, Main, NextScript } from "next/document";
import Meta from "@/components/Layout/Meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <Meta />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}