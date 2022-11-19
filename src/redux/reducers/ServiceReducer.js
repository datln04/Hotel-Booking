import { getAllServiceByCategoryId, getType } from "../actions/ServiceAction";
const initialState = {
  arrServiceByCategoryId: [],
  isLoading: true,
};

export default function ServiceByCategoryIdReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdSuccess):
      return {
        ...state,
        isLoading: false,
        arrServiceByCategoryId: action.payload,
      };
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
