import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { SessionProvider } from "next-auth/react"
import { ApolloClient, InMemoryCache, ApolloProvider, DefaultOptions } from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
