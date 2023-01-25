import React, { useState } from 'react';
import Header from './Header';
import NavAside from './Header/NavAside';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [aside, setAside] = useState(false);
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1'>
        <NavAside aside={aside} />
      </div>
      <div className={`${aside ? 'col-span-5' : 'col-span-6'}`}>
        <Header setAside={setAside} aside={aside} />
        {children}
      </div>
    </div>
  );
}
