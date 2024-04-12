import { Head, Html, Main, NextScript } from "next/document"

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="text-white bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
