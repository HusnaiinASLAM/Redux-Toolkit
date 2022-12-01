import pkg from '@reduxjs/toolkit';
const { configureStore,applyMiddleware,combineReducers } = pkg;
import logger from 'redux-logger'


const log=logger.createLogger()
console.log("Hy My name is Husnain");

const CAKE_ORDERED="CAKE_ORDERED";
const REFILLED_CAKE="REFILLED_CAKE"
const Icecream_ORDERED="Icecream_ORDERED"
const REFILLED_ICECREAM="REFILLED_ICECREAM"

    const orderCake=()=>{
        return {
            type:CAKE_ORDERED,
           
        }
    }
    const refillShop=(n)=>{
        return{
        type : REFILLED_CAKE,
        no :n,
    }
    }
    const orderIcecream=()=>{
        return {
            type:Icecream_ORDERED,
           
        }
    }
    const refillIcecream=(n)=>{
        return{
        type : REFILLED_ICECREAM,
        no :n,
    }
    }

    const Cakes={
        
        total:500
    }
    const Icecreams={
        
        total:15
    }

    const Cakereducer=(state=Cakes,action)=>{
        switch(action.type){
            case CAKE_ORDERED:
                return{
                ...state,
                total: state.total-1                
            }   
            case REFILLED_CAKE:
                return{
                    ...state,
                    total:state.total+action.no

                }

        default :
            return state
    }
}
const Icecreamreducer=(state=Icecreams,action)=>{
    switch(action.type){
        case Icecream_ORDERED:
            return{
            ...state,
            total: state.total-1                
        }   
        case REFILLED_ICECREAM:
            return{
                ...state,
                total:state.total+action.no

            }

    default :
        return state
}
}
const root=combineReducers({
        Cake:Cakereducer,
        Icecream:Icecreamreducer        
     })
const store = configureStore({
    reducer:root,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log),
  });
//const unsubscribe=store.subscribe(()=>console.log(store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(refillShop(99))

store.dispatch(orderIcecream())
store.dispatch(orderIcecream())
store.dispatch(orderIcecream())
store.dispatch(orderIcecream())

store.dispatch(refillShop(8))
