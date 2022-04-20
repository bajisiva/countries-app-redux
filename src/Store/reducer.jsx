import { COUNTRIES, LOADER } from "./actionType";
const initialState = {
  countries: [],
  load: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === COUNTRIES) {
    return { ...state, countries: action.payload };
  }
  if (action.type === LOADER) {
    return { ...state, load: !state.load };
  }

  return state;
};

export default reducer;
