import { getType, getAllNews, updateNewsEvent } from "../actions/NewsAction";

const initialState = {
  news: [],
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getAllNews.getAllNewsRequest):
      return {
        ...state,
      };
    case getType(getAllNews.getAllNewsSuccess):
      return {
        ...state,
        news: action.payload,
      };
    case getType(getAllNews.getAllNewsFailure):
      return {
        ...state,
      };
    case getType(updateNewsEvent.updateNewsEventRequest):
      return {
        ...state,
      };
    case getType(updateNewsEvent.updateNewsEventSuccess):
      return {
        ...state,
        news: action.payload,
      };
    case getType(updateNewsEvent.updateNewsEventFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
