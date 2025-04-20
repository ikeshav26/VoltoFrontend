import React from 'react'

const AccessibilityMain = () => {
    return (
        <div className=' top-30 left-10 absolute p-4 md:p-10 text-[#021322] flex flex-col   gap-5'>
            <div className=''>
                <h1 className='text-[#29A399] text-4xl font-bold'>Accessibility</h1>
            </div>
            <div className=''>
                <div  className='flex  flex-col gap-3'><p>This site uses the open source <span className='font-bold '>Content Management System Volto.</span> </p>
                    <span className='block'>It meets the<span className='font-bold'> Web Content Accessibility Guidelines</span> (WCAG v2.0) level 'AA' for people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity, and combinations of these.</span>
                    <span className='block'>It is also accessible to content authors with disabilities per the level 'AA' <span className='font-bold'>Authoring Tool Accessibility Guidelines</span> (ATAG 2.0).</span>
               </div>
            </div>
            <div className='font-bold text-3xl'>
                <h1>Statement</h1>
            </div>
            <div>
                <p>This site was designed to accommodate the different ways people access and use the Internet.</p>
            </div>
            <div className='font-bold text-3xl'>
                <h1>Validation</h1>
            </div>
            <div>
                <p className='flex flex-col gap-3'>The site uses assistive technology like WAI-ARIA roles to the current best practices; however, site standards and content vary over time. If this web site does not validate correctly, please contact the site administration.
                    <span className='block'>A number of checkpoints in WCAG 2.0 and ATAG 2.0 guidelines are subjective; there may be instances where interpretations vary.</span></p>
            </div>
        </div>
    )
}

export default AccessibilityMain
