import redux from '@reduxjs/toolkit'
const configureStore=redux.configureStore

const intialState={
    noOfCakes:50,
    noOfEmployeees:30

}

const orderCake=()=>{
return{
    type:"CAKE_ORDERED"
}
}

const employeeLeft=()=>{
return {
    type:"EMPLOYEE_LEFT"
}
}

const perform=(state=intialState,action)=>{
    switch (action.type) {
        case "CAKE_ORDERED":
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
            case "EMPLOYEE_LEFT":
                return{
                    ...state,
                    noOfEmployeees:state.noOfEmployeees-1
                }
            
    
        default:
            return state
    }
}

const store=configureStore({
    reducer:{
        action:perform,
    }
})
console.log(store.getState())
store.dispatch(orderCake())
store.dispatch(employeeLeft())
const unsubscribe=store.subscribe(()=>console.log("hy yh hb hhg gg "))

console.log(store.getState())
unsubscribe()

