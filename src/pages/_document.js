import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>

      <Html lang="en">
        <Head />
         <title>Elban</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <body className="bg-gray-50 text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
