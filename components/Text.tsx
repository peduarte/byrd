import { styled } from '../stitches.config';

export const Text = styled('span', {
  lineHeight: 1,
  margin: 0,
  fontWeight: 400,
  fontFamily: '$sans',
  color: '$loContrast',

  variants: {
    weight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
    size: {
      '1': {
        fontSize: '$1',
        lineHeight: '$1',
      },
      '2': {
        fontSize: '$2',
        lineHeight: '$2',
      },
      '3': {
        fontSize: '$3',
        lineHeight: '$3',
      },
      '4': {
        fontSize: '$4',
        lineHeight: '$4',
      },
      '5': {
        fontSize: '$5',
        lineHeight: '$5',
      },
      '6': {
        fontSize: '$6',
        lineHeight: '$6',
      },
      '7': {
        fontSize: '$7',
        lineHeight: '$6',
      },
      '8': {
        fontSize: '$8',
        lineHeight: '$7',
      },
      '9': {
        fontSize: '$9',
        lineHeight: '$7',
      },
    },
  },
});
