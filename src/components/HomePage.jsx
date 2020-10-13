import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';

function HomePage(props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Typography variant="h1">This is a home page</Typography>
    </motion.div>
  );
}

export default HomePage;
