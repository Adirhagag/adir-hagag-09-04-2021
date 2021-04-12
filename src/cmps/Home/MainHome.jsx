import React from 'react'
import { removeLocation, saveLocation } from '../../store/actions/weatherAction'
import { ForecastList } from './ForecastList'
import { useDispatch } from 'react-redux'

export const MainHome = ({ posConditions, forecast, toggleIsFavorite }) => {

  const celsiusTemp = `${posConditions.currConditions.Temperature.Metric.Value}° ${posConditions.currConditions.Temperature.Metric.Unit}`
  const dispatch = useDispatch()

  const onSaveLocation = ({ target }) => {
    const locationToSave = {
      cityName: posConditions.city.cityName,
      cityKey: posConditions.city.cityKey
    }

    if (target.checked) dispatch(saveLocation(locationToSave))
    else dispatch(removeLocation(locationToSave.cityKey))

    toggleIsFavorite()
  }

  return (
    <section className="main-home flex column">
      <div className="flex space-between">
        <div className="current-weather flex align-center">
          <img src={require(`../../assets/img/${posConditions.currConditions.WeatherIcon}.png`).default} alt="" />
          <div className="text-container flex column">
            <h1 className="title-text">{posConditions.city.cityName}</h1>
            <p>{celsiusTemp}</p>
          </div>
        </div>
        <div className="add-to-favorites-wrapper flex align-center">
          <input id="heart" type="checkbox" onChange={onSaveLocation} checked={posConditions.city.isFavorite ? true : false} />
          <label htmlFor="heart">❤ <span className="checkbox-text">{posConditions.city.isFavorite ? 'Remove from' : 'Add to'} favorites</span></label>
        </div>
      </div>
      <ForecastList forecast={forecast} />
    </section>
  )
}