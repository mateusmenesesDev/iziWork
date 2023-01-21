import { IconDeviceAnalytics } from '@tabler/icons';

type Props = {
  active?: boolean;
  children: React.ReactNode;
};

export default function NavItem({ active, children }: Props) {
  return (
    <div
      className={`${
        active && 'bg-black text-white'
      } flex items-center gap-3 rounded-xl pl-3 pr-12 py-3 mb-2`}
    >
      <div>
        <IconDeviceAnalytics size={22} />
      </div>
      <div className='text-lg font-semibold'>{children}</div>
    </div>
  );
}
