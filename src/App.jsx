/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import { ListItem, List, ListItemButton, ListItemIcon } from '@mui/material';
import './App.css';
import { contentItems } from './app/utils/sidebar';
import { useAppSelector } from './redux/store';
import { useMediaQuery } from 'react-responsive';
import Dashboard from './components/admin/Dashboard';
import Orders from './components/admin/Orders';
import Products from './components/admin/Products';
import Customers from './components/admin/Customers';
import Analytics from './components/admin/Analytics';
import Discounts from './components/admin/Discounts';
import Inventory from './components/admin/Inventory';
import Shipping from './components/admin/Shipping';
import Returns from './components/admin/Returns';
import Settings from './components/admin/Settings';
import Index from './components/user/Index';
import Navbar from './components/styled-components/Navbar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Index />} />
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index path='dashboard' element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='products' element={<Products />} />
          <Route path='customers' element={<Customers />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='discounts' element={<Discounts />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='returns' element={<Returns />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const LeftContent = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <List>
        {contentItems.map((item, key) => {
          return (
            <ListItem className='content-item' key={key}>
              <ListItemButton onClick={() => navigate(`/admin${item.path}`)}>
                <ListItemIcon>
                  <img src={item.icon} alt='icon' height='17px' />
                </ListItemIcon>
                <div className='list-item-name'>
                  {item.listItemName.toUpperCase()}
                </div>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const AdminDashboard = () => {
  const { isOpenAdminNavbar } = useAppSelector((state) => state.actionState);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1281px)',
  });

  const isLaptop = useMediaQuery({
    query: '(min-width: 1000px) and (max-width: 1280px)',
  });

  const Desktop = ({ children }) => {
    return isDesktop ? children : null;
  };

  const Laptop = ({ children }) => {
    return isLaptop ? children : null;
  };

  return (
    <div className='admin-container'>
      <Desktop>
        <div
          className='left-container'
          style={{
            width: isOpenAdminNavbar ? '4%' : '14%',
          }}
        >
          <LeftContent />
        </div>
        <div
          className='right-container'
          style={{
            width: isOpenAdminNavbar ? '96%' : '86%',
          }}
        >
          <Outlet />
        </div>
      </Desktop>
      <Laptop>
        <div
          className='left-container'
          style={{
            width: isOpenAdminNavbar ? '6%' : '21%',
          }}
        >
          <LeftContent />
        </div>
        <div
          className='right-container'
          style={{
            width: isOpenAdminNavbar ? '94%' : '79%',
          }}
        >
          <Outlet />
        </div>
      </Laptop>
    </div>
  );
};

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
