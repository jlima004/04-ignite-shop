import { styled } from '../../styles/index'

export const SkeletonProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  width: '100%',

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
  },
})

export const SkeletonImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 600,
  background: '#444',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    height: 'auto',
  },

  div: {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
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

    '@bp2': {
      marginTop: '3rem',
      marginBottom: '2rem',
    },
  },
})
