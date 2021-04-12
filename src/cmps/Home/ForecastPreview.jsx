import React from 'react'
import { utilService } from '../../services/utilService'

export const ForecastPreview = ({ todayForecast }) => {
  const temperature = (todayForecast.Temperature.Maximum.Value + todayForecast.Temperature.Minimum.Value) / 2
  const unit = todayForecast.Temperature.Maximum.Unit
  
  return (
    <div className="forecast-preview">
      <h1 className="title-text">{utilService.getDayByDate(todayForecast.Date)}</h1>
      <p className="description-text">{`${temperature.toFixed(1)}° ${unit}`}</p>
    </div>
  )
}
