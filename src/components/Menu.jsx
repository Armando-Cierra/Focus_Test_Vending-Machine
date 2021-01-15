import foodList from '../helper/foodList'
import {useState, useContext} from 'react'

import OrderContext from '../context/OrdersContext'

export default function Menu (){

    const [selection, setSelection] = useState('')
    const {orders, setOrders} = useContext(OrderContext)

    function activeSelection(name, time, color, img){
        setSelection(name)
        setOrders({
            ...orders,
            currentSelection: {name, time, color, img, ready: false}
        })
    }

    return(
        <>
            <header>
                <h1 id="title">The Vending Machine</h1>
                <img src="'../../img/logo.svg" alt=""/>
            </header>

            <section className="menu">
                <div className="instruction">
                    <div className="circle">1</div>
                    <p>Select what your appetite dictates</p>
                </div>

                {/*Showing the food categories available in the vending machine*/}
                {foodList.map((foodType, index)=>(
                    <div className={`foodType ${foodType.groupName}`} key={index}>
                        <h2>{foodType.groupName}</h2>
                        <div className="list">

                            {/*Showing the food available in the food category*/}
                            {foodType.list.map((food, index)=>(

                                <div 
                                    className={`food ${selection === food.name ? 'active' : ''}`} 
                                    key={`f${index}`} 
                                    onClick={()=>{activeSelection(food.name, food.time, foodType.color, food.img)}}
                                >
                                    <img src={food.img} alt=""/>
                                    <h3>{food.name}</h3>
                                    <p><strong>Preparation Time: </strong>{food.time} sec</p>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}