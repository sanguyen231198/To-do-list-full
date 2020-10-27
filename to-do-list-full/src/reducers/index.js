import {combineReducers} from 'redux'
import noteReducers from './noteReducers'
import searchReducers from './searchReducers'
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    note: noteReducers,
    search:searchReducers,
    
   
})
// Chúng ta sẽ gộp các reducer lại với nhau bằng hàm combineReducer.ss