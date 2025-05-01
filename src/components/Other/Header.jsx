

const Header = (props) => {

    console.log('props ', props)

    function logoutHandler() {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        // window.location.reload()
        // localStorage.removeItem('loggedInUser')

    }
    // console.log(data)

    return (
        <div className="flex items-end justify-between text-white">
            <h1 className="text-2xl font-semibold">hello <br /> <span className="text-5xl font-bold">{props.data.firstName}👋</span> </h1>
            <button className="bg-rose-600 text-white px-5 py-2 font-medium" onClick = {logoutHandler}>Log Out</button>
        </div>
    )
}

export default Header