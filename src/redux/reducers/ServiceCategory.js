import { getAllService, getType } from "../actions/ServiceCategoryAction";

const initialState = {
  arrServiceCategory: [],
};

export default function ServiceCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getAllService.getAllServiceRequest):
      return {
        ...state,
      };
    case getType(getAllService.getAllServiceSuccess):
      return {
        ...state,
        arrServiceCategory: action.payload,
      };
    case getType(getAllService.getAllServiceFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
