import "../styles/globals.scss";
import { motion } from "framer-motion";
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
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
    // </motion.div>
  );
}

export default MyApp;
