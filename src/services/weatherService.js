import axios from 'axios'
import { storageService } from './localStorageService';
import { utilService } from './utilService';

export const weatherService = {
  getCityAutocomplete,
  getCurrConditions,
  getForecast,
  queryFavorites,
  saveNewLocation,
  removeLocation
}

const apiKey = '0SSQEcCyCj0IbK6MPG5j1aJCBu2a8jKq';
const storageCityList = 'citiesDB'
const storageCurrConditions = 'currWeatherDB'
const storageForecast = 'forecastDB'
const storageFavorites = 'favoritesDB'

async function getCityAutocomplete(cityName) {
  try {
    const baseUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}&language=en-us`
    const res = await axios.get(baseUrl)
    
    return res.data
  } catch (err) {
    return `Couldn't load the cities list please try again later`
  }
  // storageService.save(storageCityList, res.data)
  // return storageService.load(storageCityList)
}

async function getCurrConditions(cityKey, cityName) {
  try {
    const baseUrl = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=en-us&details=false`
    const res = await axios.get(baseUrl)

    return {
      city: {
        cityName,
        cityKey,
        isFavorite: _checkIfFavorite(cityKey)
      },
      currConditions: res.data[0]
    }
  } catch (err) {
    return `Couldn't load the city weather please try again later`
  }
  // const currConditions = storageService.save(storageCurrConditions, res.data[0])
  // const currConditions = storageService.load(storageCurrConditions)
  // return {
  //   city: {
  //     cityName,
  //     cityKey,
  //     isFavorite: _checkIfFavorite(cityKey)
  //   },
  //   currConditions
  // }
}

async function getForecast(cityKey, isMetric = true) {
  try {
    const baseUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=en-us&details=false&metric=${isMetric}`
    const res = await axios.get(baseUrl)

    return res.data.DailyForecasts
  } catch (err) {
    return `Couldn't load the weather forecast please try again later`
  }
  // storageService.save(storageForecast, res.data.DailyForecasts)
  // const forecast = storageService.load(storageForecast)
  // return forecast
}

function queryFavorites() {
  let favorites = storageService.load(storageFavorites)
  if (!favorites || !favorites.length) favorites = []

  return favorites
}

function saveNewLocation({ cityKey, cityName }) {
  const location = {
    _id: utilService.makeId(),
    cityKey,
    cityName
  }
  let favorites = storageService.load(storageFavorites)
  if (!favorites) favorites = []

  favorites.unshift(location)
  storageService.save(storageFavorites, favorites)
  return location
}

function removeLocation(cityKey) {
  const favorites = storageService.load(storageFavorites)
  const locationIdx = favorites.findIndex((location) => location.cityKey === cityKey)
  favorites.splice(locationIdx, 1)

  storageService.save(storageFavorites, favorites)
}

function _checkIfFavorite(cityKey) {
  const favorites = storageService.load(storageFavorites)
  if (!favorites || !favorites.length) return false

  const favoriteLocation = favorites.find((location) => location.cityKey === cityKey)
  if (!favoriteLocation) return false

  else return true
}
