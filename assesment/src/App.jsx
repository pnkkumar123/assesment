import React from 'react'
import Search from './Components/Search'
import MyBookShelf from './Components/MyBookShelf'
import styled from 'styled-components'
import {  Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Wrapper>
    
   
     <Routes>

      <Route path='/' element={<Search/>}/>
      <Route path='/myshelf' element={<MyBookShelf/>}/>
     </Routes>
     
    </Wrapper>
  )
}
const Wrapper =styled.div`
display:flex;
flex-direction:row;
`
export default App
