// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';


const Layout = () => {
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    switch (to){
      case 'destination':
        navigate('/');
        break;
      case 'favorite':
        navigate('/favorites');
        break;
      case 'about':
        navigate('/about');
        break;
      default:
        navigate('/');
        break;

    }
  }
  

  return (
    <div> {/* Background will be here */}
      <Header onNavigate={handleNavigation} /> {/* To Do */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
