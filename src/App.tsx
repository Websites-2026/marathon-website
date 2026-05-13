import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#c6ff00]/30 overflow-x-hidden">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
