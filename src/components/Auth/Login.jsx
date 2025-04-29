import { useState } from "react"


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        console.log('hello form submitted.')
        console.log(`email is : ${email}`)
        console.log(`password is : ${password}`)
        handleLogin(email, password)
        e.preventDefault()
    }

    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <div className=" ">
                <form 
                onSubmit={submitHandler}
                className="flex flex-col items-center justify-center">
                    <input 
                    required 
                    type="email" 
                    placeholder="Enter your email" className="text-white focus-within:outline-2 focus-within:outline-indigo-600 border-emerald-300 py-5 px-5 rounded-full bg-transparent"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <input required type="password" placeholder="Enter your password"
                    className="text-white focus-within:outline-2 focus-within:outline-indigo-600  border-emerald-300 rounded-full bg-transparent"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}  />
                    <button className="text-white ocus-within:outline-2 focus-within:outline-indigo-600  border-emerald-300 py-3 px-5 rounded-full bg-transparent cursor-pointer">LogIn</button>
                </form>

            </div>

        </div>
    )
}

export default Login