import React from 'react'
import ScreenCss from '../styles/Screen.css'

export const Screen = ({result}) => {
  return (
    <form>
      <input type="text" value={result}/>
    </form>
  )
}
