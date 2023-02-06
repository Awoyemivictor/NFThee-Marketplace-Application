const initialState = {
  someProp: {},
  anotherProp: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        someProp: {
            
        },
      };
    case "ANOTHER_ACTION":
      return {
        ...state,
        // anotherProp: anotherValue + action.actionPayload,
        anotherProp: {},
      };
    default:
      return state;
  }
};
export default reducer;
