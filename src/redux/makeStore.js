import { createStore, combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { uiReducer } from "./uiReducer"; //I have no idea why I'm putting these in separate files ...
import { composeWithDevTools } from "redux-devtools-extension";

function makeStore(){
    const allReducers = combineReducers({
        data: dataReducer,
        ui: uiReducer
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