import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}
