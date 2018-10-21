import React, {Component} from 'react';
import  {createStore} from 'redux';

class Reactdemo extends Component{
    render(){
        const reducer = function(state, action){
            if(action.type === "ATTACK"){
                return action.payload
            }
            if(action.type === "GREENATTACK"){
                return action.payload
            }
            return state;
        }
        const store = createStore(reducer, "Peace");
        store.subscribe(()=>{
            console.log("store is now", store.getState());
        })
        store.dispatch({type: "ATTACK", payload: "Iron Man"})
        store.dispatch({type: "GREENATTACK", payload: "HULK"})
        return(
            <div>
                test
            </div>
        );
    }
}
export default Reactdemo;