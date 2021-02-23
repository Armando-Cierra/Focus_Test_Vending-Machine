import {useStore} from '../store'

export default function CurrentSelection(){

    const {currentSelection, removeCurrentSelection, ordersList, addOrder} = useStore()
    const {name, time, color, img} = currentSelection

    async function confirmOrder(){
        let newArray = ordersList
        newArray.push(currentSelection)
        
        addOrder(newArray)
        removeCurrentSelection()
    }

    return(
        <div className="currentSelection" id="currentSelection">
            <div className="instruction">
                <div className="circle">2</div>
                <p>Current Selection</p>
            </div>
            <div className="content">
                <div className={`box ${color}`}>
                    <div className="foodImage">
                        <img src={img === '' ? '../../img/question.svg' : img} alt=""/>
                    </div>
                    <h3 className={color}>{name === '' ? 'Nothing Selected' : name}</h3>
                    <div className="decoration"></div>
                    <p><strong>Preparation Time: </strong>{time === '' ? 0 : time}</p>
                    {name === '' ? null : <button className="btn black" onClick={confirmOrder}>Order It!</button>}
                </div>
            </div>
        </div>
    )
}