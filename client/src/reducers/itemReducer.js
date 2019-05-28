import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Anda Curry" },
    { id: uuid(), name: "Chicken Biryani" },
    { id: uuid(), name: "Fries" },
    { id: uuid(), name: "Fried Chicken" },
    { id: uuid(), name: "Pizza" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
