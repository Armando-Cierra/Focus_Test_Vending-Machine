import {useState, useEffect} from 'react'

export default function Element({order, deleteOrder, index}){

    const abortController = new AbortController()

    const {name, time, color} = order
    const [timer, setTimer] = useState(time)

    useEffect(()=>{
        setTimeout(() => {
            if(timer >= 1){
                setTimer(timer - 1)
            }
        }, 1000);

        return ()=>{
            abortController.abort()
        }
    })

    return(
        <div className={`box ${color}`}>
            <h3 className={color}>{name === '' ? 'Nothing Selected' : name}</h3>
            <div className="decoration"></div>
            <p><strong>Time Remaining: </strong>{time === '' ? 0 : timer}</p>
            {timer !== 0 ?
                <button className="btn black disabled">Take It</button>
                :
                <button className="btn black" onClick={()=>{deleteOrder(index)}}>Take It</button>
            }
        </div>
    )
}