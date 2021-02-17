import { styled } from '../stitches.config';

export const Button = styled.button({
  // Reset
  appearance: 'none',
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
  // fontFamily: '$mono',
  fontWeight: '600',
  ':focus': {
    boxShadow: '$blue 0px 0px 0px 1px inset, $blue 0px 0px 0px 1px',
  },
  ':disabled': {
    pointerEvents: 'none',
    color: '$gray',
    cursor: 'not-allowed',
  },

  backgroundColor: '$blue',
  color: '$white',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.9,
  },

  ':active': {
    opacity: 0.8,
  },

  variants: {
    size: {
      medium: {
        px: '$3',
        height: '$4',
        fontSize: '$2',
      },
      large: {
        px: '$4',
        height: '$5',
        fontSize: '$3',
      },
    },
  },
});

Button.defaultProps = {
  size: 'medium',
};
