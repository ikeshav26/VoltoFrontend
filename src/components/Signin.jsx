import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='h-screen flex overflow-y-hidden'>
            <div className='w-1/2  hidden md:block' >
                <svg className=' ' width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="640.002" y="700" width="640" height="700" transform="rotate(180 640.002 700)" fill="#74DCD4" />
                    <path d="M0 350H320L0 700V350Z" fill="#29A399" />
                    <path d="M320 0H0L320 350V0Z" fill="#BAEEE9" />
                    <circle cx="350" cy="350" r="350" transform="rotate(180 350 350)" fill="#021322" />
                    <rect x="640.002" y="700" width="320" height="700" transform="rotate(180 640.002 700)" fill="#74DCD4" />
                    <circle cx="480.002" cy="350" r="160" transform="rotate(180 480.002 350)" fill="white" />
                    <circle cx="160" cy="350" r="80" transform="rotate(180 160 350)" fill="white" />
                    <circle cx="480" cy="350" r="80" transform="rotate(180 480 350)" fill="#021322" />
                    <rect x="700" y="700" width="60" height="700" transform="rotate(180 700 700)" fill="white" />
                    <circle cx="480.001" cy="700" r="160" transform="rotate(180 480.001 700)" fill="#BAEEE9" />
                    <circle cx="480.002" cy="-0.00012207" r="160" transform="rotate(180 480.002 -0.00012207)" fill="#29A399" />
                </svg>

            </div>
            <div className='w-full bg-white flex flex-col justify-center items-center gap-24'>
                <div className='absolute top-10 right-10 cursor-pointer'>
                    <Link to="/">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 19.1785L23.2441 24.4226L24.4226 23.2441L19.1785 18L24.4226 12.7559L23.2441 11.5774L18 16.8215L12.7559 11.5774L11.5774 12.7559L16.8215 18L11.5774 23.2441L12.7559 24.4226L18 19.1785Z" fill="#4A5B68" />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="120" rx="60" fill="#74DCD4" />
                        <path d="M38.5316 98.0059H42.888L48.3456 85.3529H43.4998L40.7098 92.5972L37.8463 85.3529H33.0005L38.5316 98.0059Z" fill="#021322" />
                        <path d="M53.2485 98.2996C57.1888 98.2996 60.3948 95.3138 60.3948 91.6672C60.3948 88.0206 57.1888 85.0592 53.2485 85.0592C49.3082 85.0592 46.0776 88.0206 46.0776 91.6672C46.0776 95.3138 49.3082 98.2996 53.2485 98.2996ZM53.2485 94.3838C51.7555 94.3838 50.5318 93.1601 50.5318 91.6672C50.5318 90.1743 51.7555 88.975 53.2485 88.975C54.7414 88.975 55.9406 90.1743 55.9406 91.6672C55.9406 93.1601 54.7414 94.3838 53.2485 94.3838Z" fill="#021322" />
                        <path d="M60.2013 98.0059H64.9248V81.5632H60.2013V98.0059Z" fill="#021322" />
                        <path d="M73.1062 94.0167C72.8614 94.2369 72.3964 94.3838 71.9559 94.3838C71.3196 94.3838 70.879 93.8453 70.879 93.0867V89.0729H73.3754V85.3529H70.879V83.4885H66.3758V85.3529H64.785V89.0729H66.3758V94.0167C66.3758 96.5375 68.138 98.2996 70.6588 98.2996C71.7846 98.2996 73.1306 97.7612 73.9138 97.0025L73.1062 94.0167Z" fill="#021322" />
                        <path d="M79.9097 98.2996C83.85 98.2996 87.0561 95.3138 87.0561 91.6672C87.0561 88.0206 83.85 85.0592 79.9097 85.0592C75.9694 85.0592 72.7389 88.0206 72.7389 91.6672C72.7389 95.3138 75.9694 98.2996 79.9097 98.2996ZM79.9097 94.3838C78.4168 94.3838 77.1931 93.1601 77.1931 91.6672C77.1931 90.1743 78.4168 88.975 79.9097 88.975C81.4026 88.975 82.6019 90.1743 82.6019 91.6672C82.6019 93.1601 81.4026 94.3838 79.9097 94.3838Z" fill="#021322" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6789 70.572C54.6185 65.9791 59.9602 57.3948 59.9602 47.5628C59.9602 37.7308 54.6185 29.1465 46.6789 24.5536C50.586 22.2934 55.1222 20.9998 59.9606 20.9998C74.6309 20.9998 86.5235 32.8925 86.5235 47.5628C86.5235 62.2331 74.6309 74.1258 59.9606 74.1258C55.1222 74.1258 50.586 72.8322 46.6789 70.572ZM79.8827 47.5631C79.8827 51.2307 76.9095 54.2038 73.242 54.2038C69.5744 54.2038 66.6012 51.2307 66.6012 47.5631C66.6012 43.8955 69.5744 40.9223 73.242 40.9223C76.9095 40.9223 79.8827 43.8955 79.8827 47.5631ZM46.6786 54.2038C50.3462 54.2038 53.3193 51.2307 53.3193 47.5631C53.3193 43.8955 50.3462 40.9223 46.6786 40.9223C43.011 40.9223 40.0378 43.8955 40.0378 47.5631C40.0378 51.2307 43.011 54.2038 46.6786 54.2038Z" fill="#021322" />
                    </svg>
                    <h2 className='text-black font-bold text-2xl'>Join Volto</h2>
                </div>
                <div className='w-full'>
                    <form>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <div><input type="text" name="name" required className="input md:w-[40vw] h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Your name" /></div>
                            <div className='flex flex-col gap-3 '>
                                <input type="email" name="email" required className="input  md:w-[40vw] h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Email" />
                                <p className='text-[#617789] text-sm md:text-md'>This will be your login name</p>
                            </div>
                        </div>
                        <div className='flex justify-around gap-10 items-center mt-16'>
                            <Link className='text-black font-sem-bold text-lg' to="/login">Log in</Link>
                            <button className='cursor-pointer'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#0B78D0" />
                                <path d="M25.4363 29.881L27.0077 31.4524L34.46 24L27.0077 16.5477L25.4363 18.119L30.2062 22.8889H13.9998V25.1111H30.2062L25.4363 29.881Z" fill="white" />
                            </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
