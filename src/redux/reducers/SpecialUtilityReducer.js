import { getSpecialUtility, getType } from "../actions/SpecialUtilityActions";
const initialState = {
  arrSpecialUtility: [],
  isLoading: true,
};

export default function SpecialUtilityReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getSpecialUtility.getSpecialUtilityRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getSpecialUtility.getSpecialUtilitySuccess):
      return {
        ...state,
        isLoading: false,
        arrSpecialUtility: action.payload,
      };
    case getType(getSpecialUtility.getSpecialUtilityFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
