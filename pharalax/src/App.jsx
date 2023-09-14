import React from 'react'
import './App.css'
import earth from './assets/earth.jpg'
import moon from './assets/moon.jpg'

function Header(){
return(
  <header>
  <img src={earth} alt="EARTH" />
  <img src={moon} alt='Moon'/>
  </header>
)
}

function App() {


  return (
   <div>
    <Header></Header>
   <p>JASDASD</p>
   </div>
  )
}

export default App
