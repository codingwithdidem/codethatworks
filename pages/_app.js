import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';

import Heading from '@/components/Heading';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider
      components={{
        h1: Heading
      }}
    >
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
