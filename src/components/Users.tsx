import React, {useEffect, useState} from 'react'
import iconactive from '../images/iconactive.png';
import iconloan from '../images/iconloan.png';
import iconsavings from '../images/iconsavings.png';
import iconusers from '../images/iconusers.png';
import threeline from '../images/threeline.png';
import threedot from '../images/threedot.png';
import prev from '../images/prev.png';
import next from '../images/next.png';
import '../styles/user.scss'
import lastdropdown from '../images/lastdropdown.png'
import { Link } from 'react-router-dom';

const Users = () => {
    // interface Data {
    //     id: number
    //     value: string
    // }
    const [users, setUsers] = useState([])
    const [countStart, setCountStart] = useState(0)
    const [countEnd, setCountEnd] = useState(10)

    let getTime = (post: Date) => {
        return new Date(post).toLocaleDateString()
    }


    const numberToTenDigits = (number: string) => {
        let tenDigits = ''
        for (let num of number) {
            if (parseInt(num)) {
                tenDigits += num
            }
        }
        return tenDigits.slice(0, 9)
    }

    const increaseId = () => {
        if (countStart === 90 || countEnd === 100) {
            setCountStart(0)
            setCountEnd(10)
        } else {
            setCountStart(prev => prev + 10)
            setCountEnd(prev => prev + 10)
        }
    }

    const decreaseId = () => {
        if (countStart === 0 || countEnd === 10) {
            setCountStart(90)
            setCountEnd(100)
        } else {
            setCountStart(prev => prev - 10)
            setCountEnd(prev => prev - 10)
        }
    }

    

    useEffect(()=> {
        const getUsers = async (): Promise<any> => {
            let response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            let data = await response.json()
            setUsers(data)
        }
        getUsers()
        console.log(users)
    }, [])

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
            <thead>

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
                <th>
                    
                </th>
            </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    const {orgName, userName, email, phoneNumber, createdAt, id} = user
                    if (id > countStart && id<= countEnd) {
                        {
                                return (
                                <tr key={id}>
                                    <td>{orgName}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{numberToTenDigits(phoneNumber)}</td>
                                    <td>{getTime(createdAt)}</td>
                                    <td><p>Inactive</p></td>
                                    <td> 
                                        <Link to={`/user/${id} `}>
                                        <img src={threedot} alt="threedot" height='20px' width='20px' />
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        }
                })}
            
            </tbody>
        </table>
        <div className='index'>
            <h1>Showing</h1>
            <h2 > <span>10 <img height='14px' width='14px'  src={lastdropdown} alt="dropdown" /></span>out of {users.length}</h2>
            <div>
                <img width='24px' height='24px' src={prev} onClick={decreaseId} alt="prev" />
                <p>1 2 3 ... 9 10</p>
                 <img  width='24px' height='24px' onClick={increaseId} src={next} alt="next" />
            </div>
        </div>
    </div>
)
}

export default Users
