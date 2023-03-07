import React from 'react'
import {Routes,Route} from "react-router-dom"
import ChatGpt from './ChatGpt'
import Dalle from './Dalle'
import Landing from './Landing'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/chat-gpt/chat' element={<ChatGpt />} />
        <Route path='/dalle' element={<Dalle />} />
    </Routes>
  )
}

export default AllRoutes