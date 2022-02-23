import { createStore, combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

function makeStore(){
    const allReducers = combineReducers({
        data: dataReducer
    });

    return (
        createStore(
            allReducers,
            composeWithDevTools()
        )
    )
}

export {
    makeStore
}