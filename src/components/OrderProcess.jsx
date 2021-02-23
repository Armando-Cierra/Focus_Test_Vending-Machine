import Element from './Element'
import {useStore} from '../store'

export default function OrderProcess(){

    const {ordersList} = useStore()

    return(
        <div className="ordersProcess" id="ordersProcess">
            <div className="instruction">
                <div className="circle">3</div>
                <p>Order's Process</p>
            </div>
            <div className="content">
                {ordersList.length === 0 ?
                    <img src="../img/illustration.svg" alt=""/>
                    :
                    ordersList.map((order, index)=>(
                        <Element order={order} key={index} index={index} />
                    ))
                }
            </div>
        </div>
    )
}