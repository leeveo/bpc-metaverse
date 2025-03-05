import React from 'react';

type MasonryGridProps = {
  images: { src: string; alt: string }[];
  columns: number;
};

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, columns }) => {
  return (
    <div style={{ columnCount: columns, columnGap: '1em' }}>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} style={{ width: '100%', marginBottom: '1em' }} />
      ))}
    </div>
  );
};

export default MasonryGrid;
