import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  // eslint-disable-next-line react/display-name
  return () => (
    <>
      <motion.div
        className="slide-red"
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="slide-white"
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <OriginalComponent />

      {/* <motion.div
        className="slide-out"
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      /> */}
      {/* <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
      /> */}
    </>
  );
};

export default withTransition;
