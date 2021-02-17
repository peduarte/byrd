import { styled } from '../stitches.config';

export const Badge = styled.span({
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  ':disabled': {
    pointerEvents: 'none',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  border: '1px solid $black',
  fontFamily: '$mono',
  fontWeight: '500',
  fontSize: '$1',
  height: '$4',
  px: '$2',
  whiteSpace: 'nowrap',

  variants: {
    size: {
      large: {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$gray',
        color: '$hiContrast',
      },
      blue: {
        backgroundColor: '$blue',
        color: '$white',
      },
      green: {
        backgroundColor: '$turq',
        color: '$black',
      },
      red: {
        backgroundColor: '$red',
        color: '$white',
      },
      yellow: {
        backgroundColor: '$yellow',
        color: '$black',
      },
    },
  },
});

Badge.defaultProps = {
  variant: 'gray',
};
