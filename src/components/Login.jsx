import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()

    const submitHandler =async (e) => {
        e.preventDefault()

        const userInfo={
            username:e.target.username.value,
            password:e.target.password.value
        }
        try{
            const res=await axios.post('http://localhost:5000/login',userInfo)
            if(res.data){
                toast.success("Login Successful")
                localStorage.setItem("user",JSON.stringify(res.data))
                navigate("/")
            }
        }catch(err){
            console.error(err)
            toast.error("Login Failed")
        }

    }

    return (
        <div className='w-full h-screen flex overflow-hidden '>
            <div className='w-full bg-white flex flex-col justify-center items-center gap-24'>
                <div className='absolute top-10 left-10 cursor-pointer'>
                    <Link to="/">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 19.1785L23.2441 24.4226L24.4226 23.2441L19.1785 18L24.4226 12.7559L23.2441 11.5774L18 16.8215L12.7559 11.5774L11.5774 12.7559L16.8215 18L11.5774 23.2441L12.7559 24.4226L18 19.1785Z" fill="#4A5B68" />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="120" rx="60" fill="#F6D355" />
                        <path d="M38.5315 98.0059H42.8878L48.3455 85.3529H43.4997L40.7097 92.5972L37.8462 85.3529H33.0004L38.5315 98.0059Z" fill="#021322" />
                        <path d="M53.2483 98.2996C57.1886 98.2996 60.3947 95.3138 60.3947 91.6672C60.3947 88.0206 57.1886 85.0592 53.2483 85.0592C49.308 85.0592 46.0775 88.0206 46.0775 91.6672C46.0775 95.3138 49.308 98.2996 53.2483 98.2996ZM53.2483 94.3838C51.7554 94.3838 50.5317 93.1601 50.5317 91.6672C50.5317 90.1743 51.7554 88.975 53.2483 88.975C54.7412 88.975 55.9405 90.1743 55.9405 91.6672C55.9405 93.1601 54.7412 94.3838 53.2483 94.3838Z" fill="#021322" />
                        <path d="M60.2012 98.0059H64.9247V81.5632H60.2012V98.0059Z" fill="#021322" />
                        <path d="M73.106 94.0167C72.8613 94.2369 72.3963 94.3838 71.9558 94.3838C71.3195 94.3838 70.8789 93.8453 70.8789 93.0867V89.0729H73.3753V85.3529H70.8789V83.4885H66.3757V85.3529H64.7849V89.0729H66.3757V94.0167C66.3757 96.5375 68.1378 98.2996 70.6587 98.2996C71.7845 98.2996 73.1305 97.7612 73.9137 97.0025L73.106 94.0167Z" fill="#021322" />
                        <path d="M79.9096 98.2996C83.8499 98.2996 87.056 95.3138 87.056 91.6672C87.056 88.0206 83.8499 85.0592 79.9096 85.0592C75.9693 85.0592 72.7388 88.0206 72.7388 91.6672C72.7388 95.3138 75.9693 98.2996 79.9096 98.2996ZM79.9096 94.3838C78.4167 94.3838 77.193 93.1601 77.193 91.6672C77.193 90.1743 78.4167 88.975 79.9096 88.975C81.4025 88.975 82.6017 90.1743 82.6017 91.6672C82.6017 93.1601 81.4025 94.3838 79.9096 94.3838Z" fill="#021322" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6788 70.572C54.6184 65.9791 59.9601 57.3948 59.9601 47.5628C59.9601 37.7308 54.6184 29.1465 46.6788 24.5536C50.5859 22.2934 55.1221 20.9998 59.9604 20.9998C74.6308 20.9998 86.5234 32.8925 86.5234 47.5628C86.5234 62.2331 74.6308 74.1258 59.9604 74.1258C55.1221 74.1258 50.5859 72.8322 46.6788 70.572ZM79.8826 47.5631C79.8826 51.2307 76.9094 54.2038 73.2418 54.2038C69.5743 54.2038 66.6011 51.2307 66.6011 47.5631C66.6011 43.8955 69.5743 40.9223 73.2418 40.9223C76.9094 40.9223 79.8826 43.8955 79.8826 47.5631ZM46.6785 54.2038C50.346 54.2038 53.3192 51.2307 53.3192 47.5631C53.3192 43.8955 50.346 40.9223 46.6785 40.9223C43.0109 40.9223 40.0377 43.8955 40.0377 47.5631C40.0377 51.2307 43.0109 54.2038 46.6785 54.2038Z" fill="#021322" />
                    </svg>

                    <h2 className='text-black font-bold text-2xl'>Login to Volto</h2>
                </div>
                <div className='w-full'>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <div><input type="text" name="username" required className="input md:w-[40vw] h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Username" /></div>
                            <div className='flex flex-col gap-3 '>
                                <input type="password" name="password" required className="input  md:w-[40vw] h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Enter your password" />
                                <p className='text-[#617789] text-sm md:text-md'>Forgot password? Request a <span className='text-[#0b78D0] font-semibold'>New password</span></p>
                            </div>
                        </div>
                        <div className='flex justify-around gap-10 items-center mt-16'>
                            <Link className='text-black font-sem-bold text-lg' to="/signin">Sign in</Link>
                            <button className='cursor-pointer'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#0B78D0" />
                                <path d="M25.4363 29.881L27.0077 31.4524L34.46 24L27.0077 16.5477L25.4363 18.119L30.2062 22.8889H13.9998V25.1111H30.2062L25.4363 29.881Z" fill="white" />
                            </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-1/2   hidden md:block' >
                <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" width="640" height="700" fill="#F6D355" />
                    <path d="M700 350H380L700 0V350Z" fill="#B48F09" />
                    <path d="M380 700H700L380 350V700Z" fill="#FAEAAD" />
                    <circle cx="350" cy="350" r="350" fill="#021322" />
                    <rect x="60" width="320" height="700" fill="#F6D355" />
                    <circle cx="220" cy="350" r="160" fill="white" />
                    <circle cx="540" cy="350" r="80" fill="white" />
                    <circle cx="220" cy="350" r="80" fill="#021322" />
                    <rect width="60" height="700" fill="white" />
                    <circle cx="220" r="160" fill="#FAEAAD" />
                    <circle cx="220" cy="700" r="160" fill="#B48F09" />
                </svg>

            </div>
        </div>
    )
}

export default Login
