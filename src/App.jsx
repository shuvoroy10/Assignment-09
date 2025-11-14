
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default App
