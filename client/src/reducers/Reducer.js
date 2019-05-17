
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_REPOS":
	  return Object.assign({}, state, action.repos);
	case "ADD_STATS":
      return Object.assign({}, state, action.repos);  
    case "CLEAR_REPOS":
      return {};
    default:
      return state;
  }
};

export default reducer