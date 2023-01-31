import React from 'react'
import iconactive from '../images/iconactive.png';
import iconloan from '../images/iconloan.png';
import iconsavings from '../images/iconsavings.png';
import iconusers from '../images/iconusers.png';
import threeline from '../images/threeline.png';
import threedot from '../images/threedot.png';
import prev from '../images/prev.png';
import next from '../images/next.png';
import '../styles/user.scss'
import realdropdown from '../images/Realdropdown.png'

const Users = () => {
return (
    <div className='userss'>
        <h1>Users</h1>
        <div className='userss-index'>
            <div className='userss-index-section'>
                <img src={iconusers} alt="iconusers" />
                <p>USER</p>
                <h3>2,453</h3>
            </div>
            <div>
                <img src={iconactive} alt="iconactive" />
                <p>ACTIVE USER</p>
                <h3>2,453</h3>
            </div>
            <div>
                <img src={iconsavings} alt="iconsavings" />
                <p>USERS WITH LOAN</p>
                <h3>12,453</h3>
            </div>
            <div>
                <img src={iconloan} alt="iconloan" />
                <p>USERS WITH SAVINGS</p>
                <h3>102,453</h3>
            </div>
        </div>
        <table>
            <tr>
                <th> 
                    <span>ORGANIZATION<img src={threeline} alt="filter" /></span>
                </th>
                <th>
                    <span>USERNAME<img src={threeline} alt="filter" /></span>
                </th>
                <th>
                    <span>EMAIL<img src={threeline} alt="filter" /></span>
                </th>
                <th>
                    <span>PHONE NUMBER<img src={threeline} alt="filter" /></span>
                </th>
                <th>
                    <span>DATE JOINED<img src={threeline} alt="filter" /></span>
                </th>
                <th>
                    <span>STATUS<img src={threeline} alt="filter" /></span>
                </th>
            </tr>
            <tr>
                <td>john</td>
                <td>peter</td>
                <td>Sarah</td>
                <td>Sarah</td>
                <td>Sarah</td>
                <td>Sarah <img src={threedot} alt="threedot" height='20px' width='20px' /></td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>Rubi</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
                <td>Rose</td>
            </tr>
        </table>
        <div className='index'>
            <h1>Showing</h1>
            <h2>100 <span><img src={realdropdown} alt="dropdown" /></span>out of 100</h2>
            <div>
                <img src={prev} alt="prev" />1 2 3 ... 15 16 <img src={next} alt="next" />
            </div>
        </div>
    </div>
)
}

export default Users
