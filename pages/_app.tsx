import React from 'react';
import Head from 'next/head';
import '../styles.css';
import {
  css,
  // darkThemeClass
} from '../stitches.config';

const globalStyles = css.global({
  body: {
    margin: 0,
    fontFamily: '$sans',
  },
  '*': {
    boxSizing: 'border-box',
  },
});

function App({ Component, pageProps }) {
  globalStyles();
  // const [theme, setTheme] = React.useState(darkThemeClass);

  return (
    <div /*className={theme} */>
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

      {/* <IconButton
        style={{ position: 'fixed', zIndex: 999, left: 15, bottom: 15 }}
        onClick={() => setTheme(theme ? undefined : darkThemeClass)}
      >
        <SwitchIcon />
      </IconButton> */}
    </div>
  );
}

export default App;
