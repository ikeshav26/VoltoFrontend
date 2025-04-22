import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = () => {

    const navigate=useNavigate()
    const loggedinUser=localStorage.getItem("user") ;

    const submitHandler=()=>{
        localStorage.removeItem("user")
        toast.success("Logout Successfully")
       setTimeout(()=>{
        window.location.reload()
       },3000)
       navigate("/")
    }
    


    return (
        <div className=''>
            <div className="fixed top-0 z-50 w-full lg:px-20 py-4 px-6 backdrop-blur-2xl navbar shadow-sm text-[#021322]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#D6F5F2] shadow-2xl rounded-box z-1 mt-3 w-52 p-2 ">
                            <label className="input bg-white w-[150px]">
                                <input type="search" required className='text-[#085696] font-semibold' placeholder="Search Site" />
                                <svg className="h-[1.4em] opacity-50 text-[#085696] font-semibold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                            </label>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "font-semibold w-1/2 text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "font-semibold w-1/2 text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/accessibility"
                                    className={({ isActive }) =>
                                        isActive ? "font-semibold w-1/2 text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                    }
                                >
                                    Accessibility
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="  h-[30px] top-[60px]"><svg width="112" height="30" viewBox="0 0 112 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.4335 23.962H49.5835L57.2884 6.09919H50.4473L46.5085 16.3262L42.4661 6.09919H35.625L43.4335 23.962Z" fill="#021322" />
                        <path d="M64.2099 24.3766C69.7725 24.3766 74.2987 20.1614 74.2987 15.0133C74.2987 9.86523 69.7725 5.68458 64.2099 5.68458C58.6472 5.68458 54.0865 9.86523 54.0865 15.0133C54.0865 20.1614 58.6472 24.3766 64.2099 24.3766ZM64.2099 18.8484C62.1023 18.8484 60.3747 17.1209 60.3747 15.0133C60.3747 12.9057 62.1023 11.2127 64.2099 11.2127C66.3175 11.2127 68.0104 12.9057 68.0104 15.0133C68.0104 17.1209 66.3175 18.8484 64.2099 18.8484Z" fill="#021322" />
                        <path d="M74.0255 23.962H80.6938V0.749084H74.0255V23.962Z" fill="#021322" />
                        <path d="M92.2438 18.3302C91.8983 18.6411 91.2418 18.8484 90.6199 18.8484C89.7216 18.8484 89.0997 18.0883 89.0997 17.0172V11.3509H92.6238V6.09919H89.0997V3.46719H82.7423V6.09919H80.4965V11.3509H82.7423V18.3302C82.7423 21.8889 85.23 24.3766 88.7887 24.3766C90.378 24.3766 92.2783 23.6164 93.384 22.5454L92.2438 18.3302Z" fill="#021322" />
                        <path d="M101.849 24.3766C107.411 24.3766 111.937 20.1614 111.937 15.0133C111.937 9.86523 107.411 5.68458 101.849 5.68458C96.286 5.68458 91.7253 9.86523 91.7253 15.0133C91.7253 20.1614 96.286 24.3766 101.849 24.3766ZM101.849 18.8484C99.741 18.8484 98.0135 17.1209 98.0135 15.0133C98.0135 12.9057 99.741 11.2127 101.849 11.2127C103.956 11.2127 105.649 12.9057 105.649 15.0133C105.649 17.1209 103.956 18.8484 101.849 18.8484Z" fill="#021322" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 27.9933C11.9835 25.3997 15 20.5521 15 15C15 9.44788 11.9835 4.6003 7.5 2.00673C9.7063 0.730457 12.2678 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C12.2678 30 9.7063 29.2695 7.5 27.9933ZM26.25 15C26.25 17.0711 24.5711 18.75 22.5 18.75C20.4289 18.75 18.75 17.0711 18.75 15C18.75 12.9289 20.4289 11.25 22.5 11.25C24.5711 11.25 26.25 12.9289 26.25 15ZM7.5 18.75C9.57107 18.75 11.25 17.0711 11.25 15C11.25 12.9289 9.57107 11.25 7.5 11.25C5.42893 11.25 3.75 12.9289 3.75 15C3.75 17.0711 5.42893 18.75 7.5 18.75Z" fill="#021322" />
                    </svg>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mr-[30vw] px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "font-semibold text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "font-semibold text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/accessibility"
                                className={({ isActive }) =>
                                    isActive ? "font-semibold text-lg border-b-3 border-[#29A399] rounded-none" : "font-semibold text-lg"
                                }
                            >
                                Accessibility
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-7">
                    {loggedinUser?<Link to="/"><button onClick={submitHandler} className='bg-red-400 cursor-pointer text-center px-3  py-1 rounded-xl hover:scale-103'>logout</button></Link>:<Link to="/signin" className="inline-block tracking-tighter w-20 cursor-pointer"><button>signin</button></Link>}

                    <div className='hidden lg:flex border-2 border-[#0B78D0] rounded-sm'>
                        <label className="input bg-white w-[230px]">
                            <input type="search" required className='text-[#0B78D0] font-semibold ' placeholder="Search Site" />
                            <svg className="h-[1.5em] opacity-50 text-[#0B78D0] font-semibold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
