
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <Toaster />
      <Footer/>
    </>
  )
}

export default App
