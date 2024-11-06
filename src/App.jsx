import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header"
import ArticleCard from './components/ArticleCard'

function App() {

  return (
    <div id="header">
      <Header />
      <ArticleCard />
    </div>
  )
}

export default App
