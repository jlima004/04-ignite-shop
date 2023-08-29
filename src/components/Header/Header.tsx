import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react'

import { HandbagContext } from '@/contexts/HandbagContext'

import { HandbagButton, HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const { lineItens } = useContext(HandbagContext)

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <HandbagButton>
        <Handbag size={24} weight="bold" />
        {lineItens.length > 0 && <span>{lineItens.length}</span>}
      </HandbagButton>
    </HeaderContainer>
  )
}
