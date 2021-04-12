import React, { useState, useEffect } from 'react'
import { weatherService } from '../../services/weatherService'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const LocationSearch = ({ loadPosConditions }) => {

  const [locationName, setLocationName] = useState('')
  const [cities, setCities] = useState([])

  const onChangeLocationName = ({ target }) => {
    const { value } = target
    setLocationName(value)
  }

  useEffect(() => {
    // Simple debounce 
    let timeoutId = setTimeout(() => {
      if (!locationName.length) setCities([])
      else loadCityList()
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [locationName])

  const loadCityList = async () => {
    const fetchedCities = await weatherService.getCityAutocomplete(locationName)
    setCities(fetchedCities)
  }

  const checkKeyPress = async (ev) => {
    //The Enter key code
    if (ev.keyCode !== 13) return
    loadPosConditions(cities, ev.target.value)
  }

  return (
    <div className="location-search">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={cities.map((city) => city.LocalizedName) || []}
        renderInput={(params) => (
          < TextField
            onChange={onChangeLocationName}
            {...params}
            label="City Search"
            value={locationName}
            margin="normal"
            variant="outlined"
            autoFocus={true}
            onKeyUp={checkKeyPress}
            placeholder="Tel Aviv"
          />
        )}
      />
    </div>
  )
}