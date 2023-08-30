import { styled } from '../../styles/index'

export const SkeletonProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const SkeletonImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 600,
  borderRadius: 8,
  background: '#444',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
})

export const SkeletonProjectDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '.h1': {
    height: 45,
  },

  '.span': {
    marginTop: '1rem',
    height: 45,
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  'span:last-child': {
    display: 'contents',
  },

  '.button': {
    marginTop: 'auto',
    border: 0,
    borderRadius: 8,
    height: 61.6,
  },
})
