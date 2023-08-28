import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react'

import { HandbagContextProvider } from '@/contexts/HandbagContext'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <HandbagContextProvider>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <button>
            <Handbag size={24} weight="bold" />
          </button>
        </Header>

        <Component {...pageProps} />
      </HandbagContextProvider>
    </Container>
  )
}
