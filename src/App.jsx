import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet className='outlet'/>
      <Footer/>
    </div>
  )
}

export default App
