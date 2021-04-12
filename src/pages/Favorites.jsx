import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavoritesList } from '../cmps/Favorites/FavoritesList'
import { loadFavorites } from '../store/actions/weatherAction'

export const Favorites = () => {

  const dispatch = useDispatch()
  const { favorites } = useSelector(state => state.weatherModule)

  useEffect(() => {
    dispatch(loadFavorites())
  }, [])

  if (!favorites || !favorites.length) return <div className="empty-favorites">Save location to see it here...</div>
  return (
    <section className="favorites">
      <FavoritesList favorites={favorites} />
    </section>
  )
}

