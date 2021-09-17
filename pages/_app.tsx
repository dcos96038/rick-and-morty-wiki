import "../styles/globals.css";
import Layout from "../components/LayoutComponent";
import client from "../apollo/client";
import { ApolloProvider } from "@apollo/client";
import { WikiProvider } from "../context/WikiContext";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <WikiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WikiProvider>
    </ApolloProvider>
  );
}

export default MyApp;
