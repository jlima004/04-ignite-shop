import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const HandbagButton = styled('button', {
  background: '$gray800',
  border: 0,
  width: 48,
  height: 48,
  borderRadius: 6,
  color: '$gray500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  span: {
    padding: '3px 8px',
    fontSize: 14,
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '3px solid $gray900',
    borderRadius: 1000,
    background: '$green500',
    color: '$white',

    position: 'absolute',
    top: -8.5,
    right: -8.5,
  },
})
