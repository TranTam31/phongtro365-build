import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import { useEffect } from 'react'
import ListHome from './pages/ListHome'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
function App() {
//   useEffect(() => {
//     if(!user) {
//         axios.get('/profile')
//     }
// }, [])

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/listhome' element={<ListHome />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App