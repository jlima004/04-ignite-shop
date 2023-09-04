import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  '@bp1': {
    padding: '2rem',
    maxWidth: 'unset',
  },
})

export const HandbagButton = styled('button', {
  background: '$gray800',
  border: 0,
  width: 48,
  height: 48,
  borderRadius: 6,
  color: '$gray500',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  fontSize: '$xl',

  span: {
    padding: '0.187rem 0.5rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '3px solid $gray900',
    borderRadius: 1000,
    background: '$green500',
    color: '$white',

    position: 'absolute',
    top: '-0.535rem',
    right: '-0.535rem',
  },
})
