import {
    SEARCH_NOTE
  } from "../const/index";
  let initialState = '';
  const searchReducers= (state = initialState, action) =>{
    switch(action.type){
        case SEARCH_NOTE:
            return action.keyword;
        default:
            return state;
    }
};
  export default searchReducers;
  //Reducers sẽ có nhiệm vụ thay đổi state của ứng dụng dựa trên từng hành động được gửi đến.
  