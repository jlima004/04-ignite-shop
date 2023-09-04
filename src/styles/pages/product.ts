import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    padding: '0 2rem',
    maxWidth: 'unset',
  },
  '@bp2': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // gap: '2rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 600,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    height: 'auto',
  },

  img: {
    objectFit: 'cover',
    width: '100%',
  },
})

export const ProjectDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    transition: 'background-color 0.2s',

    '@bp2': {
      marginTop: '3rem',
      marginBottom: '2rem',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
