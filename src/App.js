import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Footer from './components/common/footer/Footer'
import TabOptions from './components/common/tabOptions/TabOptions'
import HomePage from './Pages/HomePage/HomePage'
import SimpleSlider from './components/Slider/SliderBox.jsx';
import ServiceProduct from './components/ServicesProduct/ServiceProduct';


function App() {
  return (
    <div>
        <HomePage/>
        <TabOptions />
        <SimpleSlider/>
        <ServiceProduct/>
        {/* different changing flexboxes content */}
        <Footer/>
        
    </div>
  )
}

export default App
