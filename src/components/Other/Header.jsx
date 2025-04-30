

const Header = () => {

    function logoutHandler() {
        localStorage.removeItem('loggedInUser')

    }

    return (
        <div className="flex items-end justify-between text-white">
            <h1 className="text-2xl font-semibold">hello <br /> <span className="text-5xl font-bold">Prallav👋</span> </h1>
            <button className="bg-rose-600 text-white px-5 py-2 font-medium" onClick = {logoutHandler}>Log Out</button>
        </div>
    )
}

export default Header