import {useState} from 'react'

export default function MobileNav(){

    const [menu, setMenu] = useState(false)

    function action(){
        menu ? setMenu(false) : setMenu(true)
    }

    return(
        <>
            <div className={`gradient ${menu ? 'active' : ''}`}></div>
            <nav className={menu ? 'active' : ''}>
                <div className="btnMenu">
                    <div 
                        className={`toggleBtn ${menu ? 'active' : ''}`} 
                        onClick={action}
                    >
                        <div></div>
                    </div>
                </div>
                <div className="links">
                    <a href="#menu" onClick={action}>
                        <div className="instruction">
                            <div className="circle">1</div>
                            <p>Select what your appetite dictates</p>
                        </div>
                    </a>
                    <a href="#currentSelection" onClick={action}>
                        <div className="instruction">
                            <div className="circle">2</div>
                            <p>Current Selection</p>
                        </div>
                    </a>
                    <a href="#ordersProcess" onClick={action}>
                        <div className="instruction">
                            <div className="circle">3</div>
                            <p>Order's process</p>
                        </div>
                    </a>
                </div>
            </nav>
        </>
    )
}