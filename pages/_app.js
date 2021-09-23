import '../styles/globals.scss'
import ScrollProvider from "../components/ScrollProvider";
import { AnimatePresence } from "framer-motion";
import {useEffect} from "react";
import {pageview} from "../lib/ga";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <ScrollProvider>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </ScrollProvider>
}

export default MyApp
