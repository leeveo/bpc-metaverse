import React from 'react';
import { Flex } from '@/once-ui/components';
import MasonryGrid from '@/components/MasonryGrid';
import { metaverseGallery } from '@/app/resources/content';

const MetaversPage = () => {
  return (
    <Flex direction="column" align="center">
      <h1>Metavers Gallery</h1>
      <MasonryGrid images={metaverseGallery.images} columns={3} />
    </Flex>
  );
};

export default MetaversPage;
