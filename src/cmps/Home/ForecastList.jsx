import React from 'react'
import { ForecastPreview } from './ForecastPreview'

export const ForecastList = ({ forecast }) => {
  return (
    <section className="forecast-list flex space-between">
      {forecast.map((todayForecast) => <ForecastPreview key={todayForecast.EpochDate} todayForecast={todayForecast} />)}
    </section>
  )
}
