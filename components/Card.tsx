import { styled } from '../stitches.config';

export const Card = styled.div({
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  borderRadius: '$2',
  padding: '$4 $4',

  variants: {
    variant: {
      light: {
        backgroundColor: '$loContrast',
        border: '1px solid $gray',
      },
      dark: {
        backgroundColor: '$hiContrast',
        border: '1px solid $gray',
      },
    },
  },
});

Card.defaultProps = {
  variant: 'light',
};
