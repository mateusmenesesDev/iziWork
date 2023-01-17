import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text sx={{ backgroundColor: 'red' }}>Welcome to Mantine!</Text>
      </MantineProvider>
    </div>
  );
}

export default App;
