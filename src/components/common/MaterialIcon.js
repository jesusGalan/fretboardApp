import React from 'react'
import 'material-design-icons/iconfont/material-icons.css'


export default (props) => {
  return (
    <i className={`material-icons ${props.className}`}>{props.name}</i>
  )
}