import React from 'react'

const Addicon = () => {
    return (
        <div>
            <div className="dropdown ">
                
                <div tabIndex={0} role="button" className="cursor-pointer m-1"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 3.75H13.75V13.75H3.75V16.25H13.75V26.25H16.25V16.25H26.25V13.75H16.25V3.75Z" fill="#4A5B68" />
                </svg></div>
                <div tabIndex={0} className="dropdown-content  w-70    bg-white text-black rounded-box z-1  shadow-sm ">
                    <div className='px-5 py-5 flex flex-col gap-4'>
                    <div>
                        <p className='text-[16px] font-semibold'>Add content - Site top level</p>
                    </div>
                    <div className='flex gap-4'>
                        <div className='bg-[#F3F5F7] hover:bg-gray-200 hover:cursor-pointer flex flex-col gap-2 items-center justify-center rounded-xl w-1/2 py-2'>
                            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 10L22 0H0V40H32V10ZM28 12.0001V36H4V4H20C20 3.99998 20 4.00002 20 4V12.0001H28Z" fill="#617789" />
                            </svg>
                            <h4>Page</h4>
                        </div>
                        <div className='bg-[#F3F5F7]  hover:bg-gray-200 hover:cursor-pointer flex flex-col gap-2 items-center justify-center rounded-xl w-1/2 py-2'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8284 8H4V40H44V12H22.8284L18.8284 8ZM8 36V16H40V36H8Z" fill="#617789" />
                            </svg>
                            <h4>Folder</h4>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between border-b-2 border-[#E4E7ED] pb-1'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3H7V5H17V3ZM5 7H12H19V9H15.4649H12H8.53513H5V7ZM5 11H3V21H21V11H19H16H14C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11H8H5ZM12 15C10.5194 15 9.22675 14.1956 8.53513 13H5V19H19V13H15.4649C14.7733 14.1956 13.4806 15 12 15Z" fill="#617789" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>Collection</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                        <div className='flex justify-between border-b-2 border-[#E4E7ED] pb-1'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2V4H3V21H21V4H17V2H15V4H9V2H7ZM19 6V8H5V6H19ZM5 10V19H19V10H5Z" fill="#4A5B68" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>Event</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                        <div className='flex justify-between border-b-2 border-[#E4E7ED] pb-1'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 10C18 11.1046 17.1046 12 16 12C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10Z" fill="#617789" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 20V4H22V20H2ZM4 6H20V17.5857L16.0001 13.5858L14.0001 15.5858L8.00008 9.58582L4 13.5859V6ZM4 16.4143V18H13.5858L8.00008 12.4142L4 16.4143ZM14.4143 18H17.5858L16.0001 16.4142L14.4143 18Z" fill="#617789" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>Image</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                        <div className='flex justify-between border-b-2 border-[#E4E7ED] pb-1'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4C8.34315 4 7 5.34315 7 7V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V4H19V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15L9 7L11 7L11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V7C13 5.34315 11.6569 4 10 4Z" fill="#617789" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>Link</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                        <div className='flex justify-between border-b-2 border-[#E4E7ED] pb-1'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 7H7V9H15V7Z" fill="#617789" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 11V17H7V11H15ZM13 15V13H9V15H13Z" fill="#617789" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H3V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V15H19V3ZM5 18V5H17V19H6C5.44772 19 5 18.5523 5 18Z" fill="#617789" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>News story</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0001 2.58582L16.7072 7.29292L15.293 8.70714L13 6.41417L13 15H11L11 6.41432L8.70718 8.70714L7.29297 7.29292L12.0001 2.58582Z" fill="#617789" />
                                    <path d="M17.917 13L19.9381 13C19.979 13.3276 20 13.6613 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 13.6613 4.02104 13.3276 4.06189 13H6.08296C6.0284 13.3252 6 13.6593 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 13.6593 17.9716 13.3252 17.917 13Z" fill="#617789" />
                                </svg>
                                <h4 className='text-[#085696] font-semibold'>Upload file</h4>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80399 17.8047L8.86133 16.8621L13.7233 12.0001L8.86133 7.13806L9.80399 6.1954L15.6087 12.0001L9.80399 17.8047Z" fill="#4A5B68" />
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addicon

