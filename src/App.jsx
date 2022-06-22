import { useState } from 'react';
import Menu from './components/Menu';
import Process from './components/Process';
import MobileNav from './components/MobileNav';

import OrderContext from './context/OrdersContext';
import './sass/index.scss';

export default function App() {
  const [orders, setOrders] = useState({
    currentSelection: {
      name: '',
      time: '',
      color: '',
      img: ''
    },
    ordersList: []
  });

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <main className="container">
        <Menu />
        <Process />
      </main>
      <MobileNav />
    </OrderContext.Provider>
  );
}
