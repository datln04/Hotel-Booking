import { getType, getAllAbstraction } from "../actions/AbstractionActions";

const initialState = {
  abstractions: [],
};

export default function AbstractionReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getAllAbstraction.getAllAbstractionRequest):
      return {
        ...state,
      };
    case getType(getAllAbstraction.getAllAbstractionSuccess):
      return {
        ...state,
        abstractions: action.payload,
      };
    case getType(getAllAbstraction.getAllAbstractionFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
