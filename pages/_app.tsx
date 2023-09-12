import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#00A9BB"
        height={2}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  )
}
