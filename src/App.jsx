import FetchSinglePlayer from './components/FetchSinglePlayer'
import FetchAllPlayers from './components/FetchAllPlayers'
import {Routes, Route} from 'react-router-dom'

import './App.css'


function App() {
 

  return (
    <div className='container'>
  <Routes>
  <Route path="/" element={<FetchAllPlayers/>}/>
  <Route path='/FetchSinglePlayer/:id' element={<FetchSinglePlayer />}/>
  </Routes>
    </div>

    
  )
}

export default App
