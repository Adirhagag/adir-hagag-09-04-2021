import React from 'react'
import { FavoritePreview } from './FavoritePreview'

export const FavoritesList = ({ favorites }) => {
  return (
    <section className="favorite-list flex">
      {favorites.map((favorite) => <FavoritePreview key={favorite._id} location={favorite} />)}
    </section>
  )
}
