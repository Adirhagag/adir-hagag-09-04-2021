import React, { useEffect, useState } from 'react'
import { weatherService } from '../../services/weatherService'
import { useHistory } from 'react-router-dom'

export const FavoritePreview = ({ location }) => {

  const [locationConditions, setLocationConditions] = useState(null)
  const history = useHistory()

  const loadLocationConditions = async () => {
    const fetchedLocationConditions = await weatherService.getCurrConditions(location.cityKey, location.cityName)
    setLocationConditions(fetchedLocationConditions)
  }

  useEffect(() => {
    loadLocationConditions()
  }, [])

  const handlePreviewClick = () => {
    history.push(`/${location.cityName}/${location.cityKey}`)
  }

  if (!locationConditions) return <div>Loading...</div>
  const celsiusTemp = `${locationConditions.currConditions.Temperature.Metric.Value}° ${locationConditions.currConditions.Temperature.Metric.Unit}`
  return (
    <div className="favorite-preview " onClick={handlePreviewClick}>
      <div>
        <h1 className="title-text">{location.cityName}</h1>
        <p className="description-text">{celsiusTemp}</p>
      </div>
      <p className="text description-text">{locationConditions.currConditions.WeatherText}</p>
    </div>
  )
}
