import React from 'react'
import './Footer.css'

const Footer = () => {
    let Logo1 = new URL("/public/images/social logo/git hub.png", import.meta.url)
    let Logo2 = new URL("/public/images/social logo/LinkedIn logo.png", import.meta.url)
    let Logo3 = new URL("/public/images/social logo/netlify logo.png", import.meta.url)
  return (
    <>
        <div className='footer sm '>
            <center>
              <p className='footertexta'>Created By <span className='footertextb'>Arshil</span></p>
              <div className='footerlogo'>
                <a href='https://github.com/Arshh82' target='#'>
                  <img src={Logo1} className='logoo' alt='null' />
                </a>
                <a href='https://www.linkedin.com/in/arshil-baig-a387b0188/' target='#'>
                  <img src={Logo2} className='logoo' alt='null' />
                </a>
                <a href='https://app.netlify.com/teams/arshh82/overview' target='#'>
                  <img src={Logo3} className='logoo' alt='null' />
                </a>
              </div>
            </center>
          </div>
    </>
    )
}

export default Footer