import { styled } from '../stitches.config';

export const Input = styled.input({
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  borderWidth: '0',
  boxSizing: 'border-box',
  flexShrink: 0,
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $hiContrast',
  color: '$hiContrast',
  fontFamily: '$mono',
  ':focus': {
    boxShadow: '$blue 0px 0px 0px 1px inset, $blue 0px 0px 0px 1px',
  },
  ':read-only': {
    color: '$gray',
  },
  ':disabled': {
    pointerEvents: 'none',
    color: '$gray',
    cursor: 'not-allowed',
  },
  '::selection': {
    backgroundColor: 'hsla(220, 100%, 85%)',
  },

  variants: {
    size: {
      medium: {
        px: '$2',
        height: '$4',
        fontSize: '$2',
      },
      large: {
        px: '$3',
        height: '$5',
        fontSize: '$3',
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $hiContrast',
        },
        ':focus': {
          boxShadow: '$blue 0px 0px 0px 1px inset, $blue 0px 0px 0px 1px',
        },
      },
    },
  },
});

Input.defaultProps = {
  size: 'medium',
};
