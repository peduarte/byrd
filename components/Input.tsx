import { styled } from '../stitches.config';

export const Input = styled.input({
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  borderWidth: '0',
  boxSizing: 'border-box',
  flexShrink: 0,
  fontFamily: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  boxShadow: 'inset 0 0 0 1px $gray300',
  borderRadius: '$1',
  color: '$hiContrast',
  p: '$1',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  ':focus': {
    boxShadow: '$blue500 0px 0px 0px 1px inset, rgb(96, 179, 251) 0px 0px 0px 1px',
  },
  ':read-only': {
    color: '$gray500',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray500',
    cursor: 'not-allowed',
  },
  '::placeholder': {
    color: '$gray500',
  },

  variants: {
    size: {
      large: {
        pt: '9px',
        px: '$2',
        pb: '$2',
        fontSize: '$2',
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $gray300',
        },
        ':focus': {
          boxShadow: 'rgb(96, 179, 251) 0px 0px 0px 1px inset, rgb(96, 179, 251) 0px 0px 0px 1px',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
      },
    },
  },
});
