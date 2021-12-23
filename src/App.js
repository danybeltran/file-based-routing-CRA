import { BrowserRouter, Link } from "react-router-dom"
import PageWithRoutes from "./components/RoutesMap"

function App() {
  return (
    // This is the page layout
    <BrowserRouter>
      <div>
        <Link to="/">Index</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to={"/user/12"}>User with id 12</Link>
      </div>
      <PageWithRoutes />
    </BrowserRouter>
  )
}

export default App
