import {useGetRoutes} from '@hooks/route/route'
import {Routes} from 'react-router-dom'
import './App.css'
import routes from './route/route'
import {ReactQueryProvider} from './provider/react-query'

function App() {
  const getRoutes = useGetRoutes(routes)
  return (
    <div className="App">
      <ReactQueryProvider>
        <Routes>{getRoutes}</Routes>
      </ReactQueryProvider>
    </div>
  )
}

export default App
