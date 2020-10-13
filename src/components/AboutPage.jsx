import { Typography } from '@material-ui/core';
import React from 'react';
import CardImage from './CardImage';
import { images } from '../images';
import { motion } from 'framer-motion';

function AboutPage(props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Typography variant="h1">About Page</Typography>
      <Typography variant="h3">{props.title}</Typography>

      {images.map((item) => (
        <CardImage image={item.thumbnail} title={item.title} text={item.text} />
      ))}
    </motion.div>
  );
}

export default AboutPage;
