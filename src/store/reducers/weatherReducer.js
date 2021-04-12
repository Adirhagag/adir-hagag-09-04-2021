const initialState = {
  favorites: [], // [{}]
  errMsg: ''
}

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.favorites }
    case 'ADD_LOCATION':
      return { ...state, favorites: [action.location, ...state.favorites] }
    case 'REMOVE_LOCATION':
      return { ...state, favorites: state.favorites.filter(location => location.cityKey !== action.cityKey) }
    case 'SET_ERR_MSG':
      return { ...state, errMsg: action.description }
    case 'CLOSE_ERR_MSG':
      return { ...state, errMsg: '' }
    default:
      return state
  }
}