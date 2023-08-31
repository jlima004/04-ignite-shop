import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 600,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: '35rem',
    textAlign: 'center',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    textDecoration: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    },
  },

  'div.imagesContainer': {
    display: 'flex',

    div: { marginLeft: '-3.437rem' },
    'div:first-child': {
      marginLeft: 'auto',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '8.75rem',
  height: '8.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 1000,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
})
