import "../styles/globals.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps, router }) {
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
