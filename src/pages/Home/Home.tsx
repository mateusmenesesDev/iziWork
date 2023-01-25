import {
  IconActivity,
  IconClockRecord,
  IconFolders,
  IconPlayerPlay,
  IconUser,
} from '@tabler/icons';
import ContainerBig from './Container/ContainerBig';
import ContainerSmall from './Container/ContainerSmall';

export default function Home() {
  const projects = [
    { title: 'project A', time: '04:00:00' },
    { title: 'project A', time: '04:00:00' },
    { title: 'project A', time: '04:00:00' },
    { title: 'project A', time: '04:00:00' },
  ];

  const tasks = [
    { title: 'Criando wireframe', time: '04:00:00' },
    { title: 'Testando deploy v2.4', time: '04:00:00' },
    { title: 'Task B', time: '04:00:00' },
    { title: 'Mudando de plataforma Deploy', time: '04:00:00' },
  ];
  return (
    <main className='px-8 py-20'>
      <div className='flex justify-between items-center mb-24'>
        <div>
          <div className='text-5xl font-semibold mb-2'>Hoje</div>
          <div className='text-2xl font-medium'>Segunda 22, 2022</div>
        </div>
        <div className='flex gap-20 items-center bg-container rounded-[34px] py-16 px-12 shadow-sm'>
          <div className='text-3xl font-semibold'>Iniciar Tempo</div>
          <div className='bg-accent-primary w-24 h-24 grid place-items-center rounded-3xl'>
            <IconPlayerPlay size={32} fill={'black'} />
          </div>
        </div>
      </div>
      <div className='font-semibold text-4xl mb-3'>
        Dados da <span className='font-bold'>semana</span>
      </div>
      <div className='grid grid-cols-3 gap-5 justify-between mb-9'>
        <ContainerSmall
          title='Atividade'
          description='0%'
          Icon={IconActivity}
        />
        <ContainerSmall
          title='Tempo gasto'
          description='40:00:05'
          Icon={IconClockRecord}
        />
        <ContainerSmall
          title='Projetos Trabalhados'
          description='02'
          Icon={IconFolders}
        />
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <ContainerBig
          projects={projects}
          title='Projects'
          btn='Ver todos'
          Icon={IconFolders}
        />
        <ContainerBig
          projects={tasks}
          title='Todo'
          btn='Ver relatórios'
          Icon={IconFolders}
        />
        <ContainerBig projects={projects} title='Members' Icon={IconUser} />
      </div>
    </main>
  );
}
