import create from 'zustand'

export const [useStore] = create(set => ({
    //States
    currentSelection: {
        name: '',
        time: '',
        color: '',
        img: ''
    },
    ordersList: [],

    //Actions
    addCurrentSelection: (name, time, color, img) =>
        set({currentSelection: { name, time, color, img }}),
    
    removeCurrentSelection: () =>
        set({
            currentSelection: {
                name: '',
                time: '',
                color: '',
                img: ''
            }
        }),
    
    addOrder: (array) =>
        set({ordersList: array}),

    removeOrder: (array) =>
        set({ordersList: array}),

    timer: (position) =>
        set(state => {
            let newArray = []

            state.ordersList.map((order, index)=>{
                if(index != position){
                    newArray.push(order)
                } else {
                    order = {
                        ...order,
                        time: order.time - 1
                    }
                    newArray.push(order)
                }
            })

            return ({ordersList: newArray})
        })
}))