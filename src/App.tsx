import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {AboutPage} from './pages/AboutPage'
import {Header} from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;
