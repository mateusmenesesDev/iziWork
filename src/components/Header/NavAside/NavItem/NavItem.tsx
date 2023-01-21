import { TablerIcon } from '@tabler/icons';

type Props = {
  active?: boolean;
  children: React.ReactNode;
  Icon: TablerIcon;
};

export default function NavItem({ active, children, Icon }: Props) {
  return (
    <div
      className={`${
        active && 'bg-black text-white'
      } flex items-center gap-3 rounded-xl pl-3 pr-12 py-3 mb-2 cursor-pointer`}
    >
      <div>
        <Icon />
      </div>
      <div className='text-lg font-semibold'>{children}</div>
    </div>
  );
}
