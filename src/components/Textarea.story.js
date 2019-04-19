import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Textarea } from './Textarea';

storiesOf('Components|Textarea', module).add('default', () => (
  <Box maxWidth="300px">
    <Box mb="4">
      <Textarea padding={1} placeholder="Your email" />
    </Box>

    <Box mb="4">
      <Textarea size="medium" placeholder="Your email" />
    </Box>
  </Box>
));
