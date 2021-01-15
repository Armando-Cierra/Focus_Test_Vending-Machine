import {useState, useEffect} from 'react'

export default function Element({order, index, deleteOrder}){

    const {img, name, time, color} = order
    const [timer, setTimer] = useState(time)

    useEffect(()=>{
        setTimeout(() => {
            if(timer >= 1){
                setTimer(timer - 1)
            }
        }, 1000);
    },[timer])

    return(
        <div className="box">
            <div className="foodImage">
                <img src={img} alt=""/>
            </div>
            <h3 className={color}>{name === '' ? 'Nothing Selected' : name}</h3>
            <div className="decoration"></div>
            <p><strong>Preparation Time: </strong>{time === '' ? 0 : timer}</p>
            {timer !== 0 ?
                <button className="btn black disabled" onClick={()=>{deleteOrder(index)}}>Take It</button>
                :
                <button className="btn black" onClick={()=>{deleteOrder(index)}}>Take It</button>
            }
        </div>
    )
}