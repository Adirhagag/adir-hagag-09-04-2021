const initialState = {
  favorites: [] // [{}]
}

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.favorites }
    case 'ADD_LOCATION':
      return { ...state, favorites: [action.location, ...state.favorites] }
    case 'REMOVE_LOCATION':
      return { ...state, favorites: state.favorites.filter(location => location.cityKey !== action.cityKey) } //filter
    default:
      return state
  }
}