import { useState } from 'react'
import './App.css'


import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './componenets/Navbar'
import Homescreen from './screens/Homescreen'
import Foodx from './screens/Foodx'
function App() {
 

  return (
    <div className="App">
  
    <Navbar/>
   <Homescreen food={Foodx}/>
    </div>
  )
}

export default App
