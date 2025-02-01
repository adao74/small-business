import { SET_LISTINGS, ADD_LISTING, DELETE_LISTING } from '../actions/types';

const initialState = {
  listings: [
    {
      id: 1,
      name: "Joe's Coffee",
      description: "Artisanal coffee shop serving locally roasted beans",
      address: "123 Main St, Portland, OR 97201",
      hours: "7AM-7PM Daily"
    },
    {
      id: 2,
      name: "Portland Books",
      description: "Independent bookstore with rare and used books",
      address: "456 Pearl St, Portland, OR 97209",
      hours: "10AM-8PM Mon-Sat, 11AM-6PM Sun"
    },
    {
      id: 3,
      name: "Green Leaf Bistro",
      description: "Farm-to-table restaurant featuring local ingredients",
      address: "789 Oak Ave, Portland, OR 97205",
      hours: "11AM-10PM Tue-Sun, Closed Mon"
    }
  ]
};

export default function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };
    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, action.payload]
      };
    case DELETE_LISTING:
      return {
        ...state,
        listings: state.listings.filter(listing => listing.id !== action.payload)
      };
    default:
      return state;
  }
} 