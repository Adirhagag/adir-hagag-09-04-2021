import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeErrMsg } from '../store/actions/weatherAction'

export const ErrorModal = () => {

  const { errMsg } = useSelector(state => state.weatherModule)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [errMsg])

  const onCloseModal = () => {
    dispatch(closeErrMsg())
  }

  return (
    <div className={`error-modal ${errMsg ? 'show' : 'hide'}`}>
      <button onClick={onCloseModal}>✕</button>
      <p>{errMsg}.</p>
    </div>
  )
}
