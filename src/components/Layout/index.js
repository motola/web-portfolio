import './index.scss';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
// import Home from '../Home';

const Layout = () => {

    return (  
        <>
        <Header />
        <Outlet />
   
        </>
    )

}


export default Layout