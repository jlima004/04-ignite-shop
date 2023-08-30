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
  const { lineItens, total, removeProduct } = useContext(HandbagContext)

  function handleRemove(id: string) {
    removeProduct(id)
  }

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
                      <span>{product.qtd + ' x ' + product.name}</span>
                      <strong>{product.price}</strong>
                    </div>
                    <div className="action">
                      <button onClick={() => handleRemove(product.id)}>
                        Remover
                      </button>
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

                {lineItens.length === 1 &&
                  ((lineItens[0].qtd || 1) > 1
                    ? `${lineItens[0].qtd} itens`
                    : '1 item')}

                {lineItens.length > 1 &&
                  lineItens.reduce((acum, { qtd = 1 }) => {
                    return acum + qtd
                  }, 0) + ' itens'}
              </span>
            </div>
            <div className="total">
              <strong className="totalLabel">Valor total</strong>
              <strong className="totalValue">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total / 100)}
              </strong>
            </div>
          </div>
          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
