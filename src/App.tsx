import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalProvider } from "./context/GlobalProvider"
import Home from "./pages/Home"

function App() {
  return (
    // GlobalProvider que envuelve toda la aplicación para proporcionar el contexto global a todos los componentes
    <GlobalProvider>
      <div className="w-screen h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App
