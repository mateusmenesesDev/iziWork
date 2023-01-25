import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Kanban from '../pages/kanban/Kanban';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Kanban />} path='/kanban' />
      </Routes>
    </BrowserRouter>
  );
}
