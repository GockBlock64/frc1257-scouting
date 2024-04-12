import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Source_Sans_Pro } from "next/font/google"

const sourceSansPro = Source_Sans_Pro({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`contents font-sans ${sourceSansPro.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
