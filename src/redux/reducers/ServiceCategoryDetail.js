import {
  getServiceCategoryById,
  getType,
} from "../actions/ServiceCategoryAction";

const initialState = {
  serviceCategoryDetail: {},
};

export default function ServiceCategoryDetailReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case getType(getServiceCategoryById.getServiceCategoryByIdRequest):
      return {
        ...state,
      };
    case getType(getServiceCategoryById.getServiceCategoryByIdSuccess):
      return {
        ...state,
        serviceCategoryDetail: action.payload,
      };
    case getType(getServiceCategoryById.getServiceCategoryByIdFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
