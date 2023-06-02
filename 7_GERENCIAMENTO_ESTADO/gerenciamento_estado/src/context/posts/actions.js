import axios from "axios";

export const getPosts = (page) => async (dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  );
  dispatch({
    type: "GET_POSTS",
    payload: res.data,
  });
};
