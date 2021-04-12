import React, { useEffect, useState } from 'react'
import { MainHome } from '../cmps/Home/MainHome'
import { LocationSearch } from '../cmps/Home/LocationSearch'
import { weatherService } from '../services/weatherService.js'
import { useParams } from 'react-router-dom'

export const Home = () => {

  const [posConditions, setPosConditions] = useState(null)
  const [forecast, setForecast] = useState([])
  const params = useParams()

  const loadPosConditions = async (cities, cityName) => {
    let chosenCity;

    if (cities) {
      chosenCity = cities.find((city) => city.LocalizedName === cityName)
      if (!chosenCity) return
    } else if (params.cityname && params.citykey) {
      chosenCity = {
        Key: +params.citykey,
        LocalizedName: params.cityname
      }
    } else {
      chosenCity = {
        Key: 215854,
        LocalizedName: 'Tel Aviv'
      }
    }

    const fetchedCurrConditions = await weatherService.getCurrConditions(chosenCity.Key, chosenCity.LocalizedName)
    await loadForecast(chosenCity.Key)
    setPosConditions(fetchedCurrConditions)
  }

  useEffect(() => {
    loadPosConditions()
  }, [])

  const loadForecast = async (cityKey) => {
    const fetchedForecast = await weatherService.getForecast(cityKey)
    setForecast(fetchedForecast)
  }

  const toggleIsFavorite = () => {
    setPosConditions({
      ...posConditions,
      city: {
        ...posConditions.city,
        isFavorite: !posConditions.city.isFavorite
      }
    })
  }

  return (
    <div className="home flex column ">
      <LocationSearch loadPosConditions={loadPosConditions} />
      {posConditions && forecast && <MainHome posConditions={posConditions} forecast={forecast} toggleIsFavorite={toggleIsFavorite} />}
    </div>
  )
}
