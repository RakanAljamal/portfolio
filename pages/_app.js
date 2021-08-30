import '../styles/globals.scss'
import ScrollProvider from "../Components/ScrollProvider";

function MyApp({ Component, pageProps }) {
  return <ScrollProvider><Component {...pageProps} /></ScrollProvider>
}

export default MyApp
