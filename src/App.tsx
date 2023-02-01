import MainLayout from './components/MainLayout';
import RouteList from './routes/Routes';

function App() {
  return (
    <>
      <MainLayout>
        <RouteList />
        {/* <Modalzinho /> */}
      </MainLayout>
    </>
  );
}

export default App;
