import React from 'react'
import ColorBox from './ColorBox'
import { ColorProvider } from '../../context/color';
import SelectColors from './SelectColors';


const contextIndex = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
};

export default contextIndex