import { useEffect, useContext } from 'react';
import OrdersContext from '../context/OrdersContext';

export default function Element({ order, deleteOrder, index }) {
  const { name, time, color } = order;

  const { orders, setOrders } = useContext(OrdersContext);
  const { ordersList } = orders;

  useEffect(() => {
    let newOrdersList = ordersList;
    let interval = null;

    if (Number(newOrdersList[index].time) > 0) {
      interval = setInterval(() => {
        if (Number(newOrdersList[index].time) >= 1) {
          newOrdersList[index].time = Number(newOrdersList[index].time) - 1;
          setOrders({
            ...orders,
            ordersList: newOrdersList
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [orders]);

  return (
    <div className={`box ${color}`}>
      <h3 className={color}>{name === '' ? 'Nothing Selected' : name}</h3>
      <div className="decoration"></div>
      <p>
        <strong>Time Remaining: </strong>
        {time === '' ? 0 : ordersList[index].time}
      </p>
      {Number(ordersList[index].time) !== 0 ? (
        <button className="btn black disabled">Take It</button>
      ) : (
        <button
          className="btn black"
          onClick={() => {
            deleteOrder(index);
          }}
        >
          Take It
        </button>
      )}
    </div>
  );
}
