import { useState } from 'react'

import './App.css'

import Histry from "./components/RecentHistry/Histry"
import Chat from "./components/Main/Chat"

import recentHistry from "./components/Main/Chat"

function App() {
 

  return (
    <>
    <div className='grid grid-cols-5 '>
      <Histry/>
      {/* <Histry recentHistry={recentHistry} /> */}
      <Chat/>
     

      
    </div>
    
    </>
  )
}

export default App
