import { getSpecialUtility, getType } from "../actions/SpecialUtilityActions";
const initialState = {
  arrSpecialUtility: [],
};

export default function SpecialUtilityReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getSpecialUtility.getSpecialUtilityRequest):
      return {
        ...state,
      };
    case getType(getSpecialUtility.getSpecialUtilitySuccess):
      return {
        ...state,
        arrSpecialUtility: action.payload,
      };
    case getType(getSpecialUtility.getSpecialUtilityFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
