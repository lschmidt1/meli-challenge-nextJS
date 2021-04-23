import "../styles/App.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/header/header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
