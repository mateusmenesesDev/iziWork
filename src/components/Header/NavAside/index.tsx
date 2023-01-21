type Props = {
  aside: boolean;
};
export default function NavAside({ aside }: Props) {
  return (
    <div
      className={`${
        aside ? 'block' : 'hidden'
      } flex flex-col items-center bg-gray-900 text-white w-80`}
    >
      <div className='text-3xl font-semibold'>IzI Work</div>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Analytic</li>
          <li>Timesheets</li>
          <li>Todo</li>
          <li>Report</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Settings</li>
          <li>Bug Report</li>
        </ul>
      </div>
      <div>Workspaces</div>
    </div>
  );
}
