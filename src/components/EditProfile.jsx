import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const EditProfile = () => {
  const navigate = useNavigate()

  const submitHandler = () => {
    localStorage.removeItem("user")
    toast.success("Logout Successfully")
    setTimeout(() => {
      window.location.reload()
    }, 3000)
    navigate("/")
  }

  return (
    <div className='w-full h-screen bg-white text-black'>
      <div className=' h-screen w-20 flex'>
        <div className='z-99'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle  " />
            <div className="drawer-content h-screen">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button h-40 absolute top-1/3 mt-10 transform translate-x-[-70%] "></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
              <div className="menu bg-[#E1E6EA] text-base-content min-h-full w-30 p-4 flex flex-col justify-around items-center gap-90">
                {/* Sidebar content here */}
                <div>
                  <Link to='/UserHome'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="#F3F5F7" />
                    <path d="M22.3839 16.3839L20.6161 14.6161L12.2322 23L20.6161 31.3839L22.3839 29.6161L17.0178 24.25L35.25 24.25L35.25 21.75L17.0178 21.75L22.3839 16.3839Z" fill="#4A5B68" />
                  </svg>
                  </Link>
                </div>
                <div className=''>
                  <svg width="70" height="20" viewBox="0 0 45 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <div className='flex'>
          <div className='w-14 md:w-24 lg:w-30 h-screen bg-[#FFD900] opacity-50 absolute left-0'></div>
          <div className='flex flex-col '>
            <div className='w-full h-14 md:h-20 bg-[#74DCD4] opacity-50 absolute top-0 flex items-center justify-around'>
              <h2 className='text-xl font-bold '>Your Profile</h2>
              <button onClick={submitHandler} className='cursor-pointer'>
                <svg className='' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1841_91)">
                    <rect width="36" height="36" rx="18" fill="#D0220B" />
                    <path d="M17 24C18.4021 24 19.6918 23.5191 20.7133 22.7133L22.1348 24.1348C20.7454 25.2991 18.9545 26 17 26C12.5817 26 9 22.4183 9 18C9 13.5817 12.5817 10 17 10C18.9545 10 20.7454 10.7009 22.1348 11.8652L20.7133 13.2867C19.6918 12.4809 18.4021 12 17 12C13.6863 12 11 14.6863 11 18C11 21.3137 13.6863 24 17 24Z" fill="white" />
                    <path d="M28.4141 18L23.707 22.7071L22.2927 21.2929L24.5857 19L16 19V17L24.5856 17L22.2927 14.7071L23.707 13.2929L28.4141 18Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1841_91" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.007 0 0 0 0 0.0763 0 0 0 0 0.133 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1841_91" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1841_91" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center'>
                <div className="card  w-50 md:w-70 lg:w-96 lg:h-[50vh] shadow-sm">
                  <figure className="px-6 pt-6 ">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="text-xl font-bold">Change your avatar</h2>
                    <fieldset className="">
                      <input type="file"  className="bg-gray-300 px-2 py-1 rounded-xl w-40 md:w-50 lg:w-66" />
                    </fieldset>
                    <div className="card-actions">
                      <button className="bg-[#0B78D0] rounded-xl px-2 py-1 mt-4">Save avatar</button>
                    </div>
                  </div>
                </div>
                <fieldset className="flex flex-col">
                  <input type="text" className="border-2 border-[#0B78D0] w-50 md:w-70 lg:w-96 px-3 py-1 rounded-xl " placeholder="Enter Username you want to update" />
                  <p className="label text-sm">Optional</p>
                </fieldset>
                <button className='bg-[#0B78D0] rounded-xl px-2 py-1 w-1/2'>Save Details</button>
              </div>
            </div>
            <div className='w-full h-14 md:h-20 bg-[#74DCD4] absolute bottom-0 opacity-50'></div>
          </div>
          <div className=' w-14 md:w-24 lg:w-30 h-screen bg-[#FFD900] absolute right-0 opacity-50'></div>
        </div>


      </div>
    </div>
  )
}

export default EditProfile
