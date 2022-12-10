import React from 'react'
import './Toggle.css';

import { Icon } from '@iconify/react';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  const handleClick = () =>{
    theme.dispatch({type: 'toggle'})
  }
  return (
    <div className="toggle" onClick={handleClick}>
        <Icon icon="ri:moon-line" />
        <Icon icon="mingcute:sun-line" />
        <div className="t-button"
        
            style={darkMode? {left: '2px'} : {right : '2px'}}>
        </div>
    </div>
  )
}

export default Toggle