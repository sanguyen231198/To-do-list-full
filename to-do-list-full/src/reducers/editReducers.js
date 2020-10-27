import { EDIT_NOTE } from "../const";

var initialState = {
    id : '',
    content : '',
    level : 0
};
var editReducers = (state = initialState, action) =>{
    switch(action.type){
        case EDIT_NOTE:
            return action.note;
        default:
            return state;
    }
};

export default editReducers;