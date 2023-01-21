import { useState } from 'react';
import NavItem from './NavItem/NavItem';

type Props = {
  aside: boolean;
};
export default function NavAside({ aside }: Props) {
  return (
    <div
      className={`${
        aside ? 'block' : 'hidden'
      } flex flex-col items-center bg-container h-screen`}
    >
      <div className='text-3xl font-semibold h-32 flex items-center mb-24'>
        IzI Work
      </div>
      <div className='mb-24'>
        <ul>
          <NavItem active> Home </NavItem>
          <NavItem> Analytic </NavItem>
          <NavItem> Todo </NavItem>
          <NavItem> Report </NavItem>
          <NavItem> Settings </NavItem>
        </ul>
      </div>
      <div>Workspaces</div>
    </div>
  );
}
