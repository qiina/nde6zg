import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImgItem = ({ ...props }: ImageProps) => (
  <div>
    <LazyLoadImage
      alt={props.alt}
      height={props.height}
      src={props.src}
      width={props.width} />
  </div>
);
 
export default ImgItem;