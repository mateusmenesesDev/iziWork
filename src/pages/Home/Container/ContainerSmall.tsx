import { IconDotsVertical, TablerIcon } from '@tabler/icons';

type Props = {
  title: string;
  description: string;
  Icon: TablerIcon;
};
export default function ContainerSmall({ title, description, Icon }: Props) {
  return (
    <div className='bg-container p-10 rounded-[34px] shadow-sm max-w-[470px] mx-auto w-full'>
      <div className='flex justify-between items-center mb-20'>
        <h4 className='font-medium text-xl xl:text-2xl'>{title}</h4>
        <div>
          <IconDotsVertical />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <span className='font-semibold text-3xl'>{description}</span>
        <div className='bg-accent-secondary p-5 rounded-[38px] text-accent-primary'>
          <Icon size={44} />
        </div>
      </div>
    </div>
  );
}
