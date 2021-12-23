import pages from "./$pages"

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

function App() {
  const Page = pages[window.location.pathname] || ErrorPage
  return (
    <div>
      <a href="/">Index page</a>
      <Page />
    </div>
  )
}

export default App
