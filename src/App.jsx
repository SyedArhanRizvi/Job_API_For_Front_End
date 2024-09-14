import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from "react-router"
import Form from './components/form'
import AllJobs from './components/AllJobs'


function App() {
  

  return (
    <main className='main'>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/findJobs' element={<AllJobs/>}/>
    </Routes>
    </BrowserRouter>
    
    </main>
  )
}

export default App
