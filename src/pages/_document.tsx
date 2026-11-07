import { Html, Head, Main, NextScript } from "next/document";

/*
  The page declares its kind and its dealt look on <html>, where the design system
  and the kit's checkers read them.
  page type: software · radius: soft · buttons: pill · ground: deep
*/
export default function Document() {
  return (
    <Html
      lang="en"
      data-type="software"
      data-radius="soft"
      data-buttons="pill"
      data-ground="deep"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
