import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import './styles/index.css'
//Destination data
import { DestinationDetails } from './data/DestinationDetails'
// Pages
import Destinations from './pages/Destinations'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

//Nested Pages
import Itinerary from './pages/destination/Itinerary'
import Destination from './pages/destination/Destination'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations destinations={DestinationDetails} />} />
        <Route path='destination'>
          <Route path=':id' element={<Destination />} />
          <Route path=':id/itinerary' element={<Itinerary />} />
        </Route>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
