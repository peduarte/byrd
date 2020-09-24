import React from 'react';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import '../styles.css';
import { css, darkThemeClass } from '../stitches.config';
import { Box } from '../components/Box';

const globalStyles = css.global({
  body: {
    margin: 0,
    fontFamily: '$sans',
    backgroundColor: '$hiContrast',
  },
  '*': {
    boxSizing: 'border-box',
  },
});

function App({ Component, pageProps }) {
  globalStyles();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Byrd - Design System</title>
        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <Box
        as="button"
        css={{ position: 'fixed', zIndex: 999, top: '$3', right: '$3' }}
        onClick={() => darkMode.toggle()}
      >
        Toggle theme
      </Box>
    </div>
  );
}

export default App;
