import {
  ADD_NEW_NOTE,
  EDIT_NOTE,
  REMOVE_NOTE,
  SEARCH_NOTE,
  SORT_NOTE,
} from "../const/index";
// thêm note
export const actAddNote = (content, level) => {
  return {
    type: ADD_NEW_NOTE,
    content,
    level,
  };
};
//xóa note
export const actRemoveNote = (id) => {
  return {
    type: REMOVE_NOTE,
    id,
  };
};
 //sửa note
export const actEditNote = (id, content, level) => {
  return {
    type: EDIT_NOTE,
    id,
    content,
    level,
  };
};

//search note
export const actSearchNote = (keyword) => {
  return {
    type: SEARCH_NOTE,
    keyword,
  };
};
//sort note
export const actSortNote = (sortType) => {
  return {
    type: SORT_NOTE,
    sortType,
  };
};

//Actions là một object chứa các hành động mà bạn muốn thực hiện dispatch  gửi đến reducers
//Mỗi action chúng ta cần phải chỉ định thụôc tính type có giá trị duy nhất. Bởi khi action gửi đến reducer nó sẽ dựa vào thuộc tính action.type để xác định mình nên làm gì với state.
