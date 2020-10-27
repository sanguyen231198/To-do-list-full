import {
  ADD_NEW_NOTE,
  EDIT_NOTE,
  REMOVE_NOTE,
  SORT_NOTE,
} from "../const/index";

const noteReducers = (state = [], action) => {
  switch (action.type) {
    //thêm note
    case ADD_NEW_NOTE:
      const generateID = Math.random();
      state = [
        ...state,
        { id: generateID, content: action.content, level: action.level },
      ];
      return state;
    //xóa note
    case REMOVE_NOTE:
      const idRemove = action.id;
      state = state.filter((note) => note.id !== idRemove);
      return state;
    //sửa note
    case EDIT_NOTE:
      const indexOfEditNote = state.findIndex((note) => note.id === action.id);
      if (indexOfEditNote !== -1)
        state[indexOfEditNote].content = action.content;
      state[indexOfEditNote].level = action.level;
      return state;
    
    //sắp xếp note
    case SORT_NOTE:
      if (action.sortType === 1) {
        return state.slice().sort((a, b) => {
          var contentA = a.content.toLowerCase(),
            contentB = b.content.toLowerCase();
          if (contentA < contentB) return -1;
          if (contentA > contentB) return 1;
          return 0;
        });
      }
      if (action.sortType === 2) {
        return state.slice().sort((a, b) => {
          return a.level - b.level;
        });
      }
      return state;

    default:
      return state;
  }
};

export default noteReducers;
//Reducers sẽ có nhiệm vụ thay đổi state của ứng dụng dựa trên từng hành động được gửi đến.
