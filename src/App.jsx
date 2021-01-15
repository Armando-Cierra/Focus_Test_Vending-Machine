import {useState} from 'react'
import Menu from './components/Menu'
import Process from './components/Process'

import OrderContext from './context/OrdersContext'
import './sass/index.sass';

export default function App() {

  const [orders, setOrders] = useState({
    currentSelection: {
      name: '',
      time: '',
      color: '',
      img: '',
      ready: false
    },
    ordersList: []
  })

  return (
      <OrderContext.Provider value={{orders, setOrders}}>
        <Menu/>
        <Process />
      </OrderContext.Provider>
  );
}
