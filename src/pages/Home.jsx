import Veggie from "../components/veggie";
import Popular from "../components/popular";
import { motion } from "framer-motion";

import React from "react";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
      Home
    </motion.div>
  );
};

export default Home;
