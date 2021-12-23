import pages from "../$pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function ErrorPage() {
  return (
    <div>
      <h2
        style={{
          color: "red",
        }}
      >
        Error
      </h2>
    </div>
  )
}

function PageWithRoutes({ children }) {
  return (
    <Routes>
      {Object.keys(pages).map((page) => {
        // Get route page
        let Page = pages[page] || ErrorPage
        return (
          <Route key={`router-page-${page}`} path={page} element={<Page />} />
        )
      })}
    </Routes>
  )
}

export default PageWithRoutes
