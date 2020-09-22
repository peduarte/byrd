import { styled } from '../stitches.config';

export const Container = styled.div({
  // Reset
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$4',

  variants: {
    size: {
      '1': {
        px: '$5',
      },
      '2': {
        px: '$6',
      },
      '3': {
        px: '$7',
      },
    },
  },
});
