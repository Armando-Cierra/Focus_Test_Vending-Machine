import {useContext} from 'react'
import OrdersContext from '../context/OrdersContext'
import Element from './Element'

export default function OrderProcess(){

    const {orders, setOrders} = useContext(OrdersContext)
    const {ordersList} = orders

    function deleteOrder(index){
        let newOrdersList = orders.ordersList
        newOrdersList.splice(index, 1)

        setOrders({
            ...orders,
            ordersList: newOrdersList
        })
    }

    return(
        <div className="ordersProcess">
            <div className="instruction">
                <div className="circle">3</div>
                <p>Order's Process</p>
            </div>
            <div className="content">
                {ordersList.length === 0 ?
                    <img src="../img/illustration.svg" alt=""/>
                    :
                    ordersList.map((order, index)=>(
                        <Element order={order} index={index} deleteOrder={deleteOrder} key={index} />
                    ))
                }
            </div>
        </div>
    )
}