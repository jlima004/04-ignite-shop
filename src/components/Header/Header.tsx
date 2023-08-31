import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from '@phosphor-icons/react'

import { HandbagContext } from '@/contexts/HandbagContext'
import { HandbagModal } from '../HandbagModal'

import { HandbagButton, HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const { lineItens } = useContext(HandbagContext)
  const [open, setOpen] = useState<boolean>(false)

  const router = useRouter()

  function handleCloseHandbagModal() {
    setOpen(false)
  }

  function handleOpenHandbagModal() {
    setOpen(true)
  }

  if (router.pathname === '/success') {
    return (
      <HeaderContainer style={{ justifyContent: 'center' }}>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root open={open}>
        <Dialog.Trigger asChild>
          <HandbagButton onClick={handleOpenHandbagModal}>
            <Handbag weight="bold" />
            {lineItens.length > 0 && <span>{lineItens.length}</span>}
          </HandbagButton>
        </Dialog.Trigger>

        <HandbagModal closeModal={handleCloseHandbagModal} />
      </Dialog.Root>
    </HeaderContainer>
  )
}
