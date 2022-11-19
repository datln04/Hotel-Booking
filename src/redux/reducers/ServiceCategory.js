import { getServiceCategory, getType } from "../actions/ServiceCategoryAction";

const initialState = {
  arrServiceCategory: [],
};

export default function ServiceCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getServiceCategory.getServiceCategoryRequest):
      return {
        ...state,
      };
    case getType(getServiceCategory.getServiceCategorySuccess):
      return {
        ...state,
        arrServiceCategory: action.payload,
      };
    case getType(getServiceCategory.getServiceCategoryFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
