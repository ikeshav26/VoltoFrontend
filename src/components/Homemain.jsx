import React from 'react'

const Homemain = () => {
  return (
    <div className='text-black py-10 bg-white min-h-[270vh]  md:min-h-[140vh] lg:min-h-[180vh]'>
      <div>
        <p className='font-bold text-xl lg:px-1 px-6  tracking-tight lg:tracking-normal text-center'><span className='lg:block'>Volto is a React-based frontend for content management systems, currently supporting</span> three backend implementations: Plone, Guillotina and a Node JS refrence implementation.</p>
      </div>
      <div className='lg:px-20 mr-7 md:mr-1 gap-x-6  lg:gap-x-0.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-center items-center '>
        <div>
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="130" height="130" stroke="white" stroke-width="30" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M65 105.987C73.967 100.799 80 91.1042 80 80C80 68.8958 73.967 59.2006 65 54.0135C69.4126 51.4609 74.5357 50 80 50C96.5685 50 110 63.4315 110 80C110 96.5685 96.5685 110 80 110C74.5357 110 69.4126 108.539 65 105.987ZM102.5 80C102.5 84.1421 99.1421 87.5 95 87.5C90.8579 87.5 87.5 84.1421 87.5 80C87.5 75.8579 90.8579 72.5 95 72.5C99.1421 72.5 102.5 75.8579 102.5 80ZM65 87.5C69.1421 87.5 72.5 84.1421 72.5 80C72.5 75.8579 69.1421 72.5 65 72.5C60.8579 72.5 57.5 75.8579 57.5 80C57.5 84.1421 60.8579 87.5 65 87.5Z" fill="#021322" />
          </svg>
        </div>
        <div>
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="130" height="130" stroke="white" stroke-width="30" />
            <path d="M50 80H80V110C63.4315 110 50 96.5685 50 80Z" fill="#D0220B" />
            <path d="M80 80H110C110 96.5685 96.5685 110 80 110V80Z" fill="#F54E38" />
            <path d="M80 65C80 56.7157 86.7157 50 95 50C103.284 50 110 56.7157 110 65V80H80V65Z" fill="#F9A094" />
            <path d="M50 65C50 56.7157 56.7157 50 65 50C73.2843 50 80 56.7157 80 65V80H50V65Z" fill="#F54E38" />
          </svg>
        </div>
        <div className='w-[260px] h-[260px] p-10 flex justify-center items-center'>
          <img src="https://s3-alpha-sig.figma.com/img/f2b0/570f/8487a988c1369304ae3d1dfe63a2a6d3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q0RrUi4vzZGSIX041bWZBIdb~NjUvTDzWX5rSdotwXcVRj80xkmyglKQPXEzQs7aFQs5iRNkEuZel0WBcH0l-3-aZWRaNcb9C~6ZedsuOeYJGWeVkwxufRFaoCynC59ZsBMGHUHvIlVWhF6TSOKfmKHmT57Dwrs8AlIb7iqkJ21iJU-Xyp8fFzlZdGyBSa0mB-NansH6hdWcvkadbLov8XmioYUgh3MJTO8OkzE5vq~NHnZ3BdiYxz7BRrB-bW7iM~sTpYurYN9CK4xYyUnkYmUfVsoZl1CBuXCaEGxmy-BfiWjkqwR3~wGofhUlyVNufgCt7uXvXpOAhoXyK3M-YQ__"></img>
        </div>
        <div className='md:w-[260px] w-[210px] h-[260px] md:h-[260px] p-10 flex justify-center items-center'>
          <img src="https://s3-alpha-sig.figma.com/img/21bd/f3ca/8129df14dab8eb0e46eeb6002faae8f4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iJV6wXrziXhEEXSQhu5-PY96vzuJe1u3ajWMOxhy67SkgwM7qSXkWb~rat46founz4zPuNKYXV9hQl-urRrY5Adjfcvh9HohKEazu4068K15grPl0mKXOHkjGaCsGW7S~vdcCFY1jmlT-T4Igs-FB81BEALBl8fTq5sdBwp-nGRBbcjHJadCw~S9Ry6uqCmSNUpnX9Cn1~D6vf88ma9~MF0EiLdKUWU9paxfdJv4l9Q393BvAYhG6Ul6okoknJ8rMKi9dtb63o0l69xl7u4hPbx7409yA6ALaW8oMUSlsBko-QP-d1mLnI-2DcSuBen5rq2GaU1FNlJSYZYHNNmQRw__"></img>
        </div>
        <div className='w-[200px] h-[200px] p-6 flex justify-center items-center'>
          <img src="https://s3-alpha-sig.figma.com/img/34a4/598f/3b697c09db198bc5bb4a12a21b1d1e2c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzkpIJQ5ABcAr4TMf1xZ7-kJKAHU28M1zIPfyhAmYRIIh~4A9pl1eCYVveA~SdpIYTaztK-KjbG7F5uZjsx4-vzodiBhYKI~oJpZMktCfSLURe8I8dO1S8QRHXkm9D6qtcJSV5J6vQqG3bV47QeLOOR7Hj4kRv7iHHsMFsB7h67CVxCnupkTkWb5Zkmn4O9AlPKvzR5bn~gTMIWDJq3gEUFSheb9fVAIs-ghMqD47kjlquT~Ypy6JMGDC6mVdR4XUV9~CCmKXbpLu5XHrVNpNaE0Oyf6jATbcVrbLz5blHsqwq5YgF6EAOCntk8ckmL-8OJl4Iz45BI3nEX9C3Pp-g__"></img>
        </div>
      </div>
      <div className='flex  md:flex-row  justify-center items-center w-full'>
        <div className='hidden md:flex w-1/3 items-center justify-center '>
          <svg className=' w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]' width="" height="" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 300C67.1573 300 -2.93554e-06 232.843 -6.55671e-06 150L150 150L150 300Z" fill="#F6D355" />
            <rect x="150" y="150" width="150" height="150" rx="75" transform="rotate(-90 150 150)" fill="#021322" />
            <path d="M0 150L-6.55671e-06 3.05176e-05L150 2.39609e-05C150 82.8427 82.8427 150 0 150Z" fill="#FAEAAD" />
            <path d="M150 300L150 150L300 150C300 232.843 232.843 300 150 300Z" fill="#F6D355" />
          </svg>

        </div>
        <div className='w-2/3 h-60 '>
          <p className='flex flex-col gap-6 tracking-tighter lg:tracking-normal md:px-4 lg:mr-30'>
            <span className='block'><span className='text-[#2597F4] font-bold'> Plone</span> is a CMS built on Python with over 19 years of experience. Plone has very interesting features that appeal to developers and users alike, such as customizable content types, hierarchical URL object traversing and a sophisticated content workflow powered by a granular permissions model. This allows you to build anything from simple websites to enterprise-grade intranets. Volto exposes all these features and communicates with Plone via its mature REST API. Volto can be esily themed and is highly customizable.</span>
            <span className='block'> Volto also supports other APIs like Guillotina, a Python resource management system, inspired by Plone and using the same basic concepts like traversal, content types and permissions model.</span>
            Last but not least, it also supports a Volto Nodejs-based backend reference API implementation that demos how other systems could also use Volto to display and create content through it.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full mt-[50vh] md:mt-36 lg:mt-20 justify-center items-center'>
        <div className='  w-2/3 h-96 order-2 md:order-1  flex flex-col gap-4 md:px-10 lg:px-26'>
          <div className=' flex flex-col gap-6 '>
            <h2 className='font-bold  text-2xl text-[#021322]'>Try Volto</h2>
            <div>
              <p className='text-[#021322]'>You can use this site to test Volto <span className='nlock'>it runs on Voltos master branch using the latest Plone 5.2 Backend with Python 3.</span></p>
            </div>
            <p>You can log in and use it as <span className=' font-bold'> admin </span> user using these credentials.</p>
          </div>
          <div className='flex justify-between items-center md:px-10 lg:px-24 py-6 bg-[#F3F5F7] rounded-lg mt-4'>
            <div>
              <p className='font-bold text-[#021322]'>Username: <span className='text-[#2597F4]'>admin</span></p>
              <p className='font-bold text-[#021322]'>Password: <span className='text-[#2597F4]'>admin</span></p>
            </div>
            <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#0B78D0" />
                <path d="M25.4363 29.8811L27.0077 31.4524L34.46 24.0001L27.0077 16.5477L25.4363 18.1191L30.2062 22.889H13.9998V25.1112H30.2062L25.4363 29.8811Z" fill="white" />
              </svg>

            </div>
          </div>
          <div className=' flex flex-col gap-4'>
            <p>Disclaimer: This instance is reset every night, so all changes will be lost afterwards.</p>
            <p>Happy hacking!</p>
            <p>&copy; 2020 Volto Team & Plone Foundation</p>
          </div>
        </div>
        <div className=' w-1/3 h-44 mt-20  md:h-96 order-1 md:order-2 md:flex items-center justify-center'>
          <svg className='md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]' width="" height="" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C82.8427 0 150 67.1572 150 150H0V0Z" fill="#8BDE7C" />
            <path d="M149.999 150C149.999 67.1572 217.156 0 299.999 0V150H149.999Z" fill="#021322" />
            <path d="M0 150H150V300C67.1572 300 0 232.843 0 150Z" fill="#8BDE7C" />
            <rect x="149.999" y="150" width="150" height="150" rx="75" fill="#C5EFBE" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Homemain