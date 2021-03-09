import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import Heading from '@/components/Heading';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider
        components={{
          pre: (props) => <div {...props} />,
          code: (props) => <pre style={{ color: 'tomato' }} {...props} />
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
