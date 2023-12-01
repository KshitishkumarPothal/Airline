import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Traveler from './Components/Travelers/Traveler'
import Subscriber from './Components/Subscriber/Subscriber'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Navbar/>
        <Home/>
        <Search/>
        <Support/>
        <Info/>
        <Lounge/>
        <Traveler/>
        <Subscriber/>
        <Footer/>
    </>
  )
}

export default App
