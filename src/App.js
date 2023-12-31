import './App.css';
import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import { useLocation } from 'react-router-dom';

function App() {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="content">
        <Outlet />
      </div>
      {pathname.startsWith('/login') || <BottomNav />}
    </>
  );
}

export default App;
