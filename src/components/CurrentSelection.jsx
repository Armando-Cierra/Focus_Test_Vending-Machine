import {useState, useContext} from 'react'
import OrdersContext from '../context/OrdersContext'

export default function CurrentSelection(){

    const {orders, setOrders} = useContext(OrdersContext)
    const {name, time, color, img} = orders.currentSelection

    function confirmOrder(){

        let newOrdersList = orders.ordersList
        newOrdersList.push(orders.currentSelection)

        setOrders({
            ...orders,
            currentSelection: {
                name: '',
                time: '',
                color: '',
                img: ''
            },
            ordersList: newOrdersList
        })
    }

    return(
        <div className="currentSelection">
            <div className="instruction">
                <div className="circle">2</div>
                <p>Current Selection</p>
            </div>
            <div className="box">
                <div className="foodImage">
                    <img src={img === '' ? '../../img/question.svg' : img} alt=""/>
                </div>
                <h3 className={color}>{name === '' ? 'Nothing Selected' : name}</h3>
                <div className="decoration"></div>
                <p><strong>Preparation Time: </strong>{time === '' ? 0 : time}</p>
                {name === '' ? null : <button className="btn black" onClick={confirmOrder}>Order It!</button>}
            </div>
        </div>
    )
}