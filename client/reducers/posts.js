function posts(state = [], action) {
  console.log(state);
  const index = action.index;
  switch(action.type){
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index+1)
      ];
    default:
      return state;
  }
}

export default posts;
