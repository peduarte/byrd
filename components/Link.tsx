import { styled } from '../stitches.config';

export const Link = styled.a({
  // Reset
  outline: 'none',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  color: 'inherit',
  borderBottom: '1px solid $gray',
  lineHeight: 'inherit',
  transition: 'all 50ms linear',

  ':hover': {
    color: '$gray',
    borderColor: '$gray',
  },

  variants: {
    variant: {},
  },
});
