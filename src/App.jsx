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

  const [user, setUser] = useState({
    role: ""
  })
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log('data from useContext : ',authData)

  useEffect(() => {

    // if(authData){
    //   //localStorage.getItem returns null if key does not exist.
    //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    //   console.log('value of loggedInUser : ', loggedInUser)
    //   if(loggedInUser){
    //     setUser({role : loggedInUser.role})
    //   }
    //   console.log('user after useEffect of logged in : ', user)
    // }

    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser({role : userData.role})
      setLoggedInUserData(userData.data)
      console.log('inside useeffect userData : ', userData)
    }
  },[])

  console.log('value of user outside useEffect : ', user)
  
  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123'){

      const admin = authData.admin[0]
      console.log('value of admin after login handle : ', admin)
      setUser({role:'admin'})
      setLoggedInUserData(admin)

      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data: admin}))

      console.log('value of user from app : ', user) 
    }
    else if(authData){
      const employee = authData.employees.find((e) => e.email === email && e.password === password)

      if(employee){

        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))

        setUser({role:'employee'})

        setLoggedInUserData(employee)
      }
      console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }
  }

 
  console.log('value of loggedInUserData : ', loggedInUserData, 'user : ', user)
  return (
    <>
      {!loggedInUserData ? <Login handleLogin = {handleLogin} /> : (
      user.role === 'admin' ? <AdminDashboard /> : 
      user.role === 'employee' ? <EmployeeDashboard data ={loggedInUserData}/> : ''
      )}
      {/* <EmployeeDashboard />
      <AdminDashboard /> */}
    </>
  )
}

export default App
