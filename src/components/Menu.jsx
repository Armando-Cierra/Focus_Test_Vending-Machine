import { useContext, useEffect, useState } from 'react';

import OrderContext from '../context/OrdersContext';
import { getAllProducts } from '../services/products';

export default function Menu() {
    const [foodList, setFoodList] = useState([]);
    const { orders, setOrders } = useContext(OrderContext);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const products = await getAllProducts();
        if (products) setFoodList(products);
    };

    function activeSelection(name, time, color, img) {
        setOrders({
            ...orders,
            currentSelection: { name, time, color, img, ready: false }
        });
    }

    return (
        <>
            <section className='menu' id='menu'>
                <header>
                    <h1 id='title'>The Vending Machine</h1>
                    <img src="'../../img/logo.svg" alt='' />
                </header>
                <div className='instruction'>
                    <div className='circle'>1</div>
                    <p>Select what your appetite dictates</p>
                </div>

                {/*Showing the food categories available in the vending machine*/}
                {foodList.map((foodType, index) => (
                    <div className={`foodType ${foodType.groupName}`} key={index}>
                        <h2>{foodType.groupName}</h2>
                        <div className='list'>
                            {/*Showing the food available in the food category*/}
                            {foodType.list.map((food, index) => (
                                <div
                                    className={`food ${orders.currentSelection.name === food.name ? 'active' : ''}`}
                                    key={`f${index}`}
                                    onClick={() => {
                                        activeSelection(food.name, food.time, foodType.color, food.img);
                                    }}
                                >
                                    <img src={food.img} alt='' />
                                    <h3>{food.name}</h3>
                                    <p>
                                        <strong>Preparation Time: </strong>
                                        {food.time} sec
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
