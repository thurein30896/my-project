import React from 'react'
import {Routes , Route} from "react-router-dom";
import Meals from './Meals';
import Detail from './Detail';
import Navbar from './Navbar';


const App = () => {
  return (
    <div className= "w-[1150px] px-5 mx-auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>} />
        <Route path='/detail/:id' element={<Detail/>} /> 
      </Routes>
    </div>
  )
}

export default App