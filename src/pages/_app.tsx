import type { AppProps } from 'next/app'

import { HandbagContextProvider } from '@/contexts/HandbagContext'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HandbagContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </HandbagContextProvider>
  )
}
