import React from 'react'
import { Link } from 'react-router-dom'

export function AppHeader() {

  return (
    <header className="app-header flex space-between">
      <h1 className="logo logo-text">Herolo Weather App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  )
}
