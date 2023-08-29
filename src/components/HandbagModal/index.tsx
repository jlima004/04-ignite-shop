import { useContext } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import { HandbagContext } from '@/contexts/HandbagContext'

import { CloseButton, Content, Overlay, ProductCard } from './styles'
import { X } from '@phosphor-icons/react'

interface HandbagModalProps {
  closeModal: () => void
}

export function HandbagModal({ closeModal }: HandbagModalProps) {
  const { lineItens } = useContext(HandbagContext)

  return (
    <Dialog.Portal>
      <Overlay onClick={closeModal} />

      <Content forceMount={true}>
        <div className="items">
          <Dialog.Title asChild>
            <strong>Sacola de compras</strong>
          </Dialog.Title>

          <CloseButton onClick={() => closeModal()}>
            <X weight="bold" />
          </CloseButton>

          <div className="items-list">
            {lineItens.length === 0 && (
              <span>Adicione camisetas à sua sacola.</span>
            )}
            {lineItens.length > 0 &&
              lineItens.map((product) => (
                <ProductCard key={product.id}>
                  <div className="img">
                    <Image
                      src={product.imageUrl}
                      width={94.79}
                      height={94.79}
                      alt=""
                    />
                  </div>

                  <div className="product">
                    <div className="info">
                      <span>{product.name}</span>
                      <strong>{product.price}</strong>
                    </div>
                    <div className="action">
                      <button>Remover</button>
                    </div>
                  </div>
                </ProductCard>
              ))}
          </div>
        </div>

        <footer>
          <div className="summary">
            <div className="qtd">
              <span className="qtdLabel">Quantidade</span>
              <span className="qtdValue">
                {lineItens.length === 0 && 'nenhum item'}
                {lineItens.length === 1 && '1 item'}
                {lineItens.length > 1 && lineItens.length + ' itens'}
              </span>
            </div>
            <div className="total">
              <strong className="totalLabel">Valor total</strong>
              <strong className="totalValue">{'R$ 270,00'}</strong>
            </div>
          </div>
          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
