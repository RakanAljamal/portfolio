import '../styles/globals.scss'
import ScrollProvider from "../Components/ScrollProvider";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return <ScrollProvider>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </ScrollProvider>
}

export default MyApp
