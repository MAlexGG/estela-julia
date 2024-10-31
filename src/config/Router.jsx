import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from '../App'
import NotFound from '../pages/NotFound'
import Videos from "../pages/videos/Videos"
import Tours from "../pages/tours/Tours"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/videos" element={<Videos/>} />
            <Route path="/tours-events" element={<Tours/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router