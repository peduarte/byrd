import { createStyled } from '@stitches/react';

export const theme = {
  breakpoints: ['575px', '750px', '1000px', '1200px'],
  colors: {
    $black: 'rgb(19, 19, 21)',
    $white: 'rgb(255, 255, 255)',
    $gray: 'rgb(128, 128, 128)',
    $blue: 'rgb(3, 136, 252)',
    $red: 'rgb(249, 16, 74)',
    $yellow: 'rgb(255, 221, 0)',
    $pink: 'rgb(232, 141, 163)',
    $turq: 'rgb(0, 245, 196)',
    $orange: 'rgb(255, 135, 31)',
  },
  fonts: {
    $sans: 'Inter,sans-serif',
    $mono: 'Fira Mono,monospace',
  },
  fontSizes: {
    $1: '12px',
    $2: '14px',
    $3: '16px',
    $4: '20px',
    $5: '24px',
    $6: '32px',
    $7: '48px',
    $8: '64px',
    $9: '72px',
  },
  lineHeights: {
    $1: '18px',
    $2: '21px',
    $3: '24px',
    $4: '30px',
    $5: '36px',
    $6: '48px',
    $7: '72px',
    $8: '96px',
    $9: '108px',
  },
  space: {
    $1: '4px',
    $2: '8px',
    $3: '16px',
    $4: '32px',
    $5: '64px',
    $6: '128px',
    $7: '256px',
    $8: '512px',
  },
  sizes: {
    $1: '4px',
    $2: '8px',
    $3: '16px',
    $4: '32px',
    $5: '64px',
    $6: '128px',
    $7: '256px',
    $8: '512px',
  },
  radii: {
    $1: '2px',
    $2: '4px',
    $3: '8px',
    $round: '9999px',
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1200px) { ${rule} }`,
    bp4: (rule) => `@media (min-width: 1800px) { ${rule} }`,
  },
  utils: {
    p: (value: keyof typeof theme['space'] | (string & {})) => ({
      padding: value,
    }),
    pt: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingTop: value,
    }),
    pr: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingRight: value,
    }),
    pb: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingBottom: value,
    }),
    pl: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingLeft: value,
    }),
    px: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: keyof typeof theme['space'] | (string & {})) => ({
      margin: value,
    }),
    mt: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
    }),
    mr: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginRight: value,
    }),
    mb: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginBottom: value,
    }),
    ml: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: value,
    }),
    mx: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
    }),
    bc: (value: keyof typeof theme['colors'] | (string & {})) => ({
      backgroundColor: value,
    }),
    size: (value: keyof typeof theme['sizes'] | (string & {})) => ({
      width: value,
      height: value,
    }),
  },
});
