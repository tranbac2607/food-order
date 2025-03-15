import type { AppProps } from 'next/app';

import { wrapper } from '@/store/store';
import MainLayout from '@/layouts/main-layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
