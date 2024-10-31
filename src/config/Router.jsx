import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from '../App'
import Videos from "../pages/videos/Videos"
import Tours from "../pages/tours/Tours"
import NotFound from "../pages/notFound/NotFound"
import Dashboard from "../pages/dashboard/Dashboard"

function Router() {
  
  const url = import.meta.env.VITE_ADMIN_URL;
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/videos" element={<Videos/>} />
            <Route path="/tours-events" element={<Tours/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path={`/${url}`} element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router