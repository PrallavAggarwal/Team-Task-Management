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
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin')
      console.log(user) 
    }
    else if(email === 'user@me.com' && password === '123'){
      setUser('employee')
      console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ('')}
      <EmployeeDashboard />
      <AdminDashboard />
    </>
  )
}

export default App
