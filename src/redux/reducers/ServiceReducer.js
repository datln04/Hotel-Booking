import { getAllServiceByCategoryId, getType } from "../actions/ServiceAction";
const initialState = {
  arrServiceByCategoryId: [],
};

export default function ServiceByCategoryIdReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdRequest):
      return {
        ...state,
      };
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdSuccess):
      return {
        ...state,
        arrServiceByCategoryId: action.payload,
      };
    case getType(getAllServiceByCategoryId.getServiceByCategoryIdFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
