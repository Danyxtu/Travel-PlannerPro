import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
// Pages
import Destinations from './pages/Destinations'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
//Nested Pages
import Itinerary from './pages/destination/Itinerary'
import Destination from './pages/destination/Destination'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Destinations />} />
        <Route path='destination'>
          <Route path=':id' element={<Destination />} />
          <Route path=':id/itinerary' element={<Itinerary />} />
        </Route>
        <Route path='/favorite' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
