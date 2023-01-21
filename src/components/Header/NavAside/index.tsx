import { NativeSelect } from '@mantine/core';
import {
  IconChecklist,
  IconDeviceAnalytics,
  IconHome2,
  IconReportAnalytics,
  IconSettings,
} from '@tabler/icons';
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
          <NavItem active Icon={IconHome2}>
            {' '}
            Home{' '}
          </NavItem>
          <NavItem Icon={IconDeviceAnalytics}> Analytic </NavItem>
          <NavItem Icon={IconChecklist}> Todo </NavItem>
          <NavItem Icon={IconReportAnalytics}> Report </NavItem>
          <NavItem Icon={IconSettings}> Settings </NavItem>
        </ul>
      </div>
      <NativeSelect
        data={['Devs Trybe', 'Mywork', 'Personal', 'Fun']}
        label='Select your workspace'
      />
    </div>
  );
}
