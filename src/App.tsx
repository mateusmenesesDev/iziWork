import { useState } from 'react';
import Header from './components/Header';
import NavAside from './components/Header/NavAside';

function App() {
  const [aside, setAside] = useState(false);
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'>
        <NavAside aside={aside} />
      </div>
      <div className={`${aside ? 'col-span-4' : 'col-span-5'}`}>
        <Header setAside={setAside} aside={aside} />
      </div>
    </div>
  );
}

export default App;
