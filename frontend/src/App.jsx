import React from 'react'
import Sidenav from './components/header/sidenav.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import  {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Sidenav/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App