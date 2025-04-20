import React from 'react'
import toast from 'react-hot-toast'

const ContactMain = () => {
    const notify=()=>{
        toast.success("Your message has been sent successfully")
    }
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center h-screen gap-24 '>
                <div className='mt-10'>
                    <h1 className='text-[#29A399] text-4xl font-semibold left-15 absolute '>Contact Volto</h1>
                </div>
                <div className='w-[70vw] md:w-[60vw] lg:[50vw]'>
                    <fieldset className="fieldset flex flex-col gap-5 w-full">
                        <input type="text" required className="input  w-full h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Your name" />
                        <input type="email" required className="input w-full h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Email" />
                        <input type="text" required className="input w-full h-[48px] text-[#0B78D0] bg-[#F2F4F7] font-bold" placeholder="Tell us what you ned help with" />
                        <input type="text" required className="input w-full h-[120px] text-[#0B78D0] bg-[#F2F4F7] font-bold placeholder:top-0 placeholder:absolute placeholder:py-4" placeholder="Give us more details" />
                        <div className='flex justify-end'>
                        <button onClick={()=>{notify()}} className='bg-[#0B78D0] hover:opacity-80 cursor-pointer w-16 font-semibold px-3 py-2 rounded-lg mt-4'>Send</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default ContactMain
