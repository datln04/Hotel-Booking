import { getType, getImageByTypeContains } from "../actions/ImageAction";

const initialState = {
  images: [],
};

export default function ImageReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getImageByTypeContains.getImageByTypeContainsRequest):
      return {
        ...state,
      };
    case getType(getImageByTypeContains.getImageByTypeContainsSuccess):
      return {
        ...state,
        images: action.payload,
      };
    case getType(getImageByTypeContains.getImageByTypeContainsFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
