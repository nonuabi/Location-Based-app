import { UPDATE_POSTS } from '../action/actionType';
export default function post(state = [], action) {
  //  { posts:[]}
  switch (action.type) {
    case UPDATE_POSTS:
      return action.post;
    default:
      return state;
  }
}
