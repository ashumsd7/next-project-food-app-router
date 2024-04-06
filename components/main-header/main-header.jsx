import React from 'react'
import logoImage from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css' 
import Image from 'next/image'
const MainHeader = () => {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image priority width='200' height='100'  src={logoImage?.src} alt='Food-logo'/>
            Next Level food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href='/meals'>Browse Meals</Link>
                </li>
                <li>
                    <Link href='/community'>Community</Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader