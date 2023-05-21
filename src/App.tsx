import {useGetRoutes} from '@hooks/route/route'
import {Routes} from 'react-router-dom'
import './App.css'
import SignUp from './pages/sign-up/SignUp'
import routes from './route/route'

function App() {
  const getRoutes = useGetRoutes(routes)
  return (
    <div className="App">
      <Routes>{getRoutes}</Routes>
    </div>
  )
}

export default App
