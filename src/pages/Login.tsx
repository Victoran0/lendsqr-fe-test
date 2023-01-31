import React from 'react';
import '../styles/index.scss';
import lendsqr from '../images/lendsqr.png';
import pablo from '../images/pablo.png'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
        <div className='login--image'>
            <img src={lendsqr} className='login--image-logo' alt='lendsqr' />
            <img src={pablo} className='login--image-pablo' alt='pablo' />
        </div>
        <div className='welcome'>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form >
            <input type='email' placeholder='Email' /> <br />
            <input type='password' placeholder='Password' /> <br />
            <Link className='welcome__forgot' to='/'>FORGOT PASSWORD?</Link> <br />
            <Link to='/'><button type='submit'>LOG IN</button></Link>
        </form>
        </div>
        </div>
    )
}

export default Login


