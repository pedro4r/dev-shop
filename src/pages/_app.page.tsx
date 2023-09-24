import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app';
import { ShopContextProvider } from '@/context/ShopContext';
import CartList from './components/Cart';
import Header from './components/Header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShopContextProvider>
      <Container>
        <Header />
        <CartList />
        <Component {...pageProps} />
      </Container>
    </ShopContextProvider>
  )
}
