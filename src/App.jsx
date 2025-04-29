import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  //calling local storage
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log('data from useContext : ',authData)

  useEffect(() => {

    if(authData){
      //localStorage.getItem returns null if key does not exist.
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData])
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      console.log(user) 
    }
    else if(authData){
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if(employee){
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
        setUser({role:'employee'})
      }
      console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }
  }

 

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ('')}
      {user === 'admin' ? <AdminDashboard /> :  <EmployeeDashboard />}
      {/* <EmployeeDashboard />
      <AdminDashboard /> */}
    </>
  )
}

export default App
