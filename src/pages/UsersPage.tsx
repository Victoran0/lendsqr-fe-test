import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Users from '../components/Users'
import '../styles/index.scss'

const UsersPage = () => {
  return (
    <div>
      <Navbar />
      <div className='users'>
        <Sidebar />
        <div className='user'><Users /></div>
      </div>
    </div>
  )
}

export default UsersPage
