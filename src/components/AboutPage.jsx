import { Typography } from '@material-ui/core';
import React from 'react';
import CardImage from './CardImage';
import { images } from '../images';

function AboutPage(props) {
  return (
    <div>
      <Typography variant="h1">About Page</Typography>
      <Typography variant="h3">{props.title}</Typography>

      {images.map((item) => (
        <CardImage image={item.thumbnail} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default AboutPage;
