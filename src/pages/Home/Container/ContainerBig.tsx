import { IconDotsVertical, TablerIcon } from '@tabler/icons';

type Props = {
  title: string;
  projects: { title: string; time?: string }[];
  btn?: string;
  Icon: TablerIcon;
};
export default function ContainerBig({ title, projects, btn, Icon }: Props) {
  return (
    <div className='bg-container rounded-[34px] shadow-md py-8 max-w-xl mb-9 mx-auto w-full'>
      <div className='flex justify-between mb-7 px-8'>
        <div className='text-3xl font-medium'>{title}</div>
        <div>
          <IconDotsVertical />
        </div>
      </div>
      <div className='px-2 max-w-3xl'>
        {projects.map((project) => (
          <div
            className='text-base font-semibold px-4 py-5 xl:flex items-center justify-between rounded-[14px] border-[#F1F1F1] border-2 mb-4 max-w-2xl'
            key={project.title}
          >
            <div className='flex items-center gap-6'>
              <div className='bg-accent-secondary text-accent-primary p-4 rounded-full'>
                <Icon />
              </div>
              <div>{project.title}</div>
            </div>
            {project.time && (
              <div className='bg-accent-secondary px-5 py-3 rounded-xl mt-5 xl:mt-0'>
                {project.time}
              </div>
            )}
          </div>
        ))}
      </div>
      {btn && (
        <div className='flex justify-end cursor-pointer px-5'>
          <a className='px-5 py-2 bg-black text-white rounded-xl'>{btn}</a>
        </div>
      )}
    </div>
  );
}
