import { IconPlayerPlay } from '@tabler/icons';

export default function Home() {
  return (
    <main className='px-12 py-20'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-5xl font-semibold mb-2'>Hoje</div>
          <div className='text-2xl font-medium'>Segunda 22, 2022</div>
        </div>
        <div className='flex gap-20 items-center bg-container rounded-[34px] py-16 px-12 shadow-sm'>
          <div className='text-3xl font-semibold'>Start Time Tracker</div>
          <div className='bg-accent-primary w-24 h-24 grid place-items-center rounded-3xl'>
            <IconPlayerPlay size={32} fill={'black'} />
          </div>
        </div>
      </div>
    </main>
  );
}
