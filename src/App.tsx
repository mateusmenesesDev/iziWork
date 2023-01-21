import { useState } from 'react';
import Header from './components/Header';
import NavAside from './components/Header/NavAside';

function App() {
  const [aside, setAside] = useState(false);
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1'>
        <NavAside aside={aside} />
      </div>
      <div className={`${aside ? 'col-span-5' : 'col-span-6'}`}>
        <Header setAside={setAside} aside={aside} />
      </div>
    </div>
  );
}

export default App;
