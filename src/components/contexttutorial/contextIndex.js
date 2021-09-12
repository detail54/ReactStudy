import React from 'react'
import ColorBox from './ColorBox'
import { ColorProvider } from '../../store/color';


const contextIndex = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  )
};

export default contextIndex