import { MantineProvider } from '@mantine/core';
import Kanban from './pages/Kanban'

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Kanban />
      </MantineProvider>
    </div>
  );
}

export default App;
