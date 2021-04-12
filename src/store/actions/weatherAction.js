import { weatherService } from "../../services/weatherService"

export function loadFavorites() {
  return async (dispatch) => {
    try {
      const favorites = weatherService.queryFavorites()
      dispatch({ type: 'SET_FAVORITES', favorites })
    } catch (err) {
      console.log(`err in LOAD FAVORITES`, err)
    }
  }
}

export function saveLocation(location) {
  return async (dispatch) => {
    try {
      const savedLocation = weatherService.saveNewLocation(location)
      dispatch({ type: 'ADD_LOCATION', location: savedLocation })
    } catch (err) {
      console.log(`err in SAVE LOCATION`, err)
    }
  }
}

export function removeLocation(cityKey) {
  return async (dispatch) => {
    try {
      weatherService.removeLocation(cityKey)
      dispatch({ type: 'REMOVE_LOCATION', cityKey })
    } catch (err) {
      console.log(`err in REMOVE LOCATION`, err)
    }
  }
}

export function setErrMsg(errMsg) {
  return (dispatch) => {
    dispatch({ type: 'SET_ERR_MSG', description: errMsg })
  }
}

export function closeErrMsg() {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_ERR_MSG' })
  }
}