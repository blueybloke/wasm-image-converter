import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import webassemblyIcon from '@iconify-icons/logos/webassembly';
import Converter from './Converter';

function App() {
  return (
    <main className="App">
      <Box>
        <AppBar>
          <Toolbar>
            <Icon
              icon={webassemblyIcon}
              width="3rem"
              height="3rem"
              style={{ margin: '1rem' }}
            />

            <Typography variant="h4">Image Converter</Typography>
          </Toolbar>
        </AppBar>
        <Converter targetFileType="jpg" />
      </Box>
    </main>
  );
}

export default App;
