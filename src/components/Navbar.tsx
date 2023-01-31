import React from 'react'
import lendsqr from '../images/lendsqr.png'
import '../styles/navbar.scss'
import search from '../images/search.png'
import bell from '../images/bell.png'
import avatar from '../images/image.png'
import dropdown from '../images/dropdown.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='navbar-logo' src={lendsqr} alt='lendsqr' />
            <input type='text' placeholder='Search for anything' />
            <button type='submit'><img width='13.97px' height='14px' src={search} alt="search" /></button>
            <Link className='docs' to='/users'>Docs</Link>
            <img src={bell} width='16px' height='16px' alt="bell" />
            <img src={avatar} className='avatar' width='48px' height='48px' alt="avatar" />
            <p>Adedeji</p>
            <img src={dropdown} width='20px' height='20px' alt="dropdown" />

        </div>
    )
}

export default Navbar
