import { styled, keyframes } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

const openModal = keyframes({
  '0%': {
    transform: 'translateX(110%)',
  },
  '100%': {
    transform: 'translateX(0%)',
  },
})

const closeModal = keyframes({
  '0%': {
    transform: 'translateX(0%)',
  },
  '100%': {
    transform: 'translateX(110%)',
  },
})

export const Content = styled(Dialog.Content, {
  height: '100vh',
  padding: '4.5rem 3rem 3rem',
  background: '$gray800',
  overflow: 'auto',

  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',

  transform: 'translateX(110%)',

  '&[data-state=open]': {
    animation: `${openModal} 0.5s ease-out`,
    animationFillMode: 'forwards',
  },

  '&[data-state=closed]': {
    animation: `${closeModal} 0.5s ease-in`,
    animationFillMode: 'forwards',
  },

  'div.items': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '24rem',

    strong: {
      fontSize: '$lg',
      fontWeight: 'bold',
      lineHeight: 1.6,
      color: '$gray100',
    },

    'div.items-list': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.371rem',
    },
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.437rem',

    'div.summary': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.187rem',

      'div.qtd': {
        display: 'flex',
        justifyContent: 'space-between',

        'span.qtdLabel': {
          color: '$gray100',
          lineHeight: 1.6,
          fontSize: '$sd',
        },
        'span.qtdValue': {
          color: '$gray300',
          lineHeight: 1.6,
          fontSize: '$md',
        },
      },
      'div.total': {
        display: 'flex',
        justifyContent: 'space-between',

        'strong.totalLabel': {
          color: '$gray100',
          lineHeight: 1.6,
          fontSize: '$md',
        },
        'strong.totalValue': {
          color: '$gray100',
          lineHeight: 1.6,
          fontSize: '$xl',
        },
      },
    },

    button: {
      display: 'flex',
      flex: 1,
      height: '4.321rem',
      border: 0,
      borderRadius: 8,
      background: '$green500',
      padding: '20px 124.5px',
      color: '$white',
      fontSize: '$md',
      lineHeight: 1.6,
      fontWeight: 'bold',
      cursor: 'pointer',

      transition: 'background-color 0.2s',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const ProductCard = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  'div.img': {
    width: '6.371rem',
    height: '5.812rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'contain',
      with: '100%',
      height: '100%',
    },
  },
  'div.product': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    'div.info': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.125rem',

      span: {
        color: '$gray300',
        fontSize: '$md',
        lineHeight: 1.6,
      },
      strong: {
        color: '$gray100',
        fontSize: '$md',
        lineHeight: 1.6,
      },
    },
    'div.action': {
      button: {
        color: '$green500',
        fontSize: '$sd',
        lineHeight: 1.6,
        fontWeight: 'bold',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      },
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500',
  fontSize: '$xl',
})
