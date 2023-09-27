import { useRoutes } from "react-router-dom"
import { router } from "./router"
import "assets/style.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {

  return (
    <div>{useRoutes(router)}</div>
  )
}

export default App
