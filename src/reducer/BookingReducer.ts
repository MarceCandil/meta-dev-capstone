import { fetchAPI } from '../helpers/bookingApis';

const bookingReducer = (state: any, action: { type: string; payload: string; }) => {
  if (action.type === "update-times") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

export default bookingReducer;