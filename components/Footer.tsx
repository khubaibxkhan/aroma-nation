import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'

const Footer = () => {
  return (

    <footer>
      <Container className='bg-white border-t'>
        <FooterTop />
        <div>
          <div>
            <Logo />
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
