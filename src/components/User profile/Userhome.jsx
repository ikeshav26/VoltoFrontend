import React from 'react'
import Home from '../home/Home'
import Navbar from '../Navbar'
import Homemain from '../Homemain'
import Homebanner from '../Homebanner'
import Moreicon from '../Moreicon'
import Addicon from '../Addicon'
import Profileicon from '../Profileicon'

const Userhome = () => {
    return (
        <div className='min-w-full flex h-screen bg-[#D6F5F2] overflow-hidden '>
            <div className="drawer w-0 z-999 h-screen">
                <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                <div className=" w-1 flex items-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button  bg-[#2597F4] h-40 tranform translate-x-[-80%] "></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-[#E4E8EC] text-base-content py-14 min-h-full w-30 p-4 flex flex-col itmes-center justify-between">
                        {/* Sidebar content here */}
                        <div className=' flex flex-col items-center gap-8'>
                            <div className='pencil-icon p-2  rounded-full'>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#0A6FC2" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8659 13.1519C31.8896 12.1756 30.3067 12.1755 29.3304 13.1519L14.2946 28.1876L13.375 34.625L19.8124 33.7054L34.8481 18.6696C35.8245 17.6933 35.8244 16.1104 34.8481 15.1341L32.8659 13.1519ZM16.3213 31.6787L16.6517 29.3661L27.3483 18.6695L29.3305 20.6517L18.6339 31.3484L16.3213 31.6787ZM31.0983 18.8839L33.0804 16.9019L31.0981 14.9196L29.1161 16.9017L31.0983 18.8839Z" fill="white" />
                                </svg>
                            </div>

                            <div className='folder-icon'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7678 5H2.5V25H27.5V7.5H14.2678L11.7678 5ZM5 22.5V10H25V22.5H5Z" fill="#4A5B68" />
                                </svg>
                            </div>
                            <div className='add-icon'>
                                <Addicon />
                            </div>
                            <div className='more-icon '>
                                <Moreicon />
                            </div>

                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <div className='prifle-icon'>
                                <Profileicon/>
                            </div>
                            <div className='logo-icon'>
                                <svg className='w-20' width="45" height="20" viewBox="0 0 45 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3734 9.58532H19.8334L22.9153 2.44021H20.1789L18.6034 6.53103L16.9864 2.44021H14.25L17.3734 9.58532Z" fill="#021322" />
                                    <path d="M25.6839 9.75117C27.909 9.75117 29.7195 8.06509 29.7195 6.00586C29.7195 3.94663 27.909 2.27437 25.6839 2.27437C23.4589 2.27437 21.6346 3.94663 21.6346 6.00586C21.6346 8.06509 23.4589 9.75117 25.6839 9.75117ZM25.6839 7.53991C24.8409 7.53991 24.1499 6.8489 24.1499 6.00586C24.1499 5.16282 24.8409 4.48562 25.6839 4.48562C26.527 4.48562 27.2042 5.16282 27.2042 6.00586C27.2042 6.8489 26.527 7.53991 25.6839 7.53991Z" fill="#021322" />
                                    <path d="M29.6102 9.58532H32.2775V0.300171H29.6102V9.58532Z" fill="#021322" />
                                    <path d="M36.8975 7.33261C36.7593 7.45699 36.4967 7.53991 36.248 7.53991C35.8886 7.53991 35.6399 7.23587 35.6399 6.80744V4.5409H37.0495V2.44021H35.6399V1.38741H33.0969V2.44021H32.1986V4.5409H33.0969V7.33261C33.0969 8.7561 34.092 9.75117 35.5155 9.75117C36.1512 9.75117 36.9113 9.44712 37.3536 9.01869L36.8975 7.33261Z" fill="#021322" />
                                    <path d="M40.7395 9.75117C42.9645 9.75117 44.775 8.06509 44.775 6.00586C44.775 3.94663 42.9645 2.27437 40.7395 2.27437C38.5144 2.27437 36.6901 3.94663 36.6901 6.00586C36.6901 8.06509 38.5144 9.75117 40.7395 9.75117ZM40.7395 7.53991C39.8964 7.53991 39.2054 6.8489 39.2054 6.00586C39.2054 5.16282 39.8964 4.48562 40.7395 4.48562C41.5825 4.48562 42.2597 5.16282 42.2597 6.00586C42.2597 6.8489 41.5825 7.53991 40.7395 7.53991Z" fill="#021322" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.1973C4.7934 10.1599 6 8.22085 6 6C6 3.77915 4.7934 1.84012 3 0.802693C3.88252 0.292183 4.90714 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C4.90714 12 3.88252 11.7078 3 11.1973ZM10.5 6C10.5 6.82843 9.82843 7.5 9 7.5C8.17157 7.5 7.5 6.82843 7.5 6C7.5 5.17157 8.17157 4.5 9 4.5C9.82843 4.5 10.5 5.17157 10.5 6ZM3 7.5C3.82843 7.5 4.5 6.82843 4.5 6C4.5 5.17157 3.82843 4.5 3 4.5C2.17157 4.5 1.5 5.17157 1.5 6C1.5 6.82843 2.17157 7.5 3 7.5Z" fill="#021322" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Navbar />
                <Homebanner />
            </div>
        </div>
    )
}

export default Userhome
