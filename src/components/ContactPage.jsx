import { Typography } from '@material-ui/core';
import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';

function ContactPage(props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Typography variant="h1">Contact Page</Typography>
      <ImageComponent />
    </motion.div>
  );
}

export default ContactPage;
