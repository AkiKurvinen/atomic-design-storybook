import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '../src/createEmotionCache';
import { GlobalStyles } from '../src/GlobalStyles'
 import { Theme, ThemeProvider } from '@mui/material/styles';
// import { ThemeProvider } from 'next-themes'

import light from '../src/themes/light';
import dark from '../src/themes/dark';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [theme, setTheme] = React.useState<Theme>(dark)

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <CacheProvider value={emotionCache}>
       <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <GlobalStyles/>

        <Component {...pageProps} toggleTheme={toggleTheme}/>
    </ThemeProvider>
    </CacheProvider>
  );
}
