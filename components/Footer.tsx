import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (

    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div>
          <div className='space-y-4'>
            <Logo />

            <p>
              Discover a world of captivating aromas with AromaNation.
            </p>
            <SocialMedia 
                className="text-darkColor/60"
                iconClassName='border-darkColor/60 hover:border-shop_light_green' 
                          />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
    
  )
}

export default Footer
