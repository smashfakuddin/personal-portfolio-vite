
const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-900 mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <li className="m-3">Home</li>
                        <li className="m-3">About</li>
                        <li className="m-3">Projects</li>
                        <li className="m-3">Contact</li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Ash</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="mr-5 text-lg">Home</li>
                    <li className="mr-5 text-lg">About</li>
                    <li className="mr-5 text-lg">Projects</li>
                    <li className="mr-5 text-lg">Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar