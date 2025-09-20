import Container from './Container'
import React from 'react'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async () => {
  const user = await currentUser();
  console.log(user, "user");


  return (
    <header className='bg-[#1A1A1A] py-5 border-b-white/50'>
      <Container className='flex items-center justify-between md:gap-0'>

        <div className='flex w-auto md:w-1/3 items-center justify-start gap-2.5'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />

        <div className='flex w-auto md:w-1/3 items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>

      </Container>
    </header>
  )
}

export default Header
