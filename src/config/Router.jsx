import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from '../App'
import Videos from "../pages/videos/Videos"
import Tours from "../pages/tours/Tours"
import NotFound from "../pages/notFound/NotFound"
import AdminVideos from "../pages/dashboard/admin_videos/AdminVideos"
import AdminTours from "../pages/dashboard/admin_tours/AdminTours"
import Login from "../pages/dashboard/login/Login"


function Router() {
  
  const videos_url = import.meta.env.VITE_ADMIN_URL;
  const tours_url = import.meta.env.VITE_ADMIN_URL_TOURS;
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/videos" element={<Videos/>} />
            <Route path="/tours-events" element={<Tours/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path={`login/${videos_url}`} element={<AdminVideos/>}/>
            <Route path={`login/${tours_url}`} element={<AdminTours/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router