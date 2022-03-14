import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <motion.div
    //   key={router.route}
    //   initial="pageInitial"
    //   animate="pageAnimate"
    //   variants={{
    //     pageInitial: {
    //       opacity: 0,
    //     },
    //     pageAnimate: {
    //       opacity: 1,
    //     },
    //   }}
    // >
    <AnimatePresence exitBeforeEnter>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </AnimatePresence>
    // </motion.div>
  );
}

export default MyApp;
