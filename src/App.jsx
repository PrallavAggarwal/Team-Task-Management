import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  //calling local storage
  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
  },)

  const [user, setUser] = useState(null)
  
  const handleLogin = () => {
    if(){

    }
  }

  return (
    <>
      {!user ? <Login/> : ('')}
      <EmployeeDashboard />
      <AdminDashboard />
    </>
  )
}

export default App
