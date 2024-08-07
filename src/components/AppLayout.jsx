import React, { useContext } from 'react'
import Home from '../pages/Home'
import ImageContext from '../Provider/ImageProvider';

const AppLayout = ({children}) => {
    const {imageurl} = useContext(ImageContext)
  return <>{imageurl ? children : <Home />}</>;
}

export default AppLayout
