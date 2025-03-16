import type { AppProps } from 'next/app';
import { useSelector } from 'react-redux';

import { wrapper } from '@/store/store';
import MainLayout from '@/layouts/main-layout';
import '../styles/globals.css';
import { selectIsLoading } from '@/store/selector/common-selector';
import Loading from '@/components/common/loading';

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useSelector(selectIsLoading);
  console.log({ isLoading });

  return (
    <>
      {isLoading && <Loading />}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
