import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import Heading from '@/components/Heading';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider
        components={{
          h1: Heading
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
