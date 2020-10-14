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
        backgroundColor: '$white',
        border: '1px solid $black',
      },
      dark: {
        backgroundColor: '$black',
        border: '1px solid $white',
      },
    },
  },
});

Card.defaultProps = {
  variant: 'light',
};
