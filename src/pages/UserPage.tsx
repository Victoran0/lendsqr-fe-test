import React, {useState, useEffect} from 'react'
import blankPix from '../images/blankPix.png';
import arrowBack from '../images/arrowBack.png';
import starFilled from '../images/starFilled.png';
import starEmpty from '../images/starEmpty.png';
import '../styles/index.scss'
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar2 from '../components/Sidebar2';


const UserPage = () => {
    let {id} = useParams();

    interface ResultItem {
        createdAt: Date
        userName: String
        
    }
    const initialItem = {
        createdAt: new Date(),
        userName: ''
    }
    let [user, setUser] = useState<ResultItem>(initialItem)

    useEffect(() => {
        const getUser = async (): Promise<any> => {
            let response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
            let data = await response.json()
            setUser(data)
        }
        getUser()
        console.log(user)
    }, [id])

    return (
        <div>
            <Navbar />
            <div className='users'>
                <Sidebar2 />
                <div className='user'>
                    <h1>{user?.userName}</h1>
                    <h1>{user?.createdAt}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserPage
