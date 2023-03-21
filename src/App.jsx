import './App.css'
import { Home } from './components/home/Home'
import { Buy } from './components/buy/Buy'
import {Login} from './components/navBar/login/Login'
import {PreciosCortes} from './components/PreciosCortes/PreciosCortes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProducts } from './components/dataProducts/DataProducts'

function App() {

  return (
  <DataProducts>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prices' element={<PreciosCortes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/buy' element={<Buy/>}/>
      </Routes>
    </BrowserRouter>
  </DataProducts>
  )
}

export default App
