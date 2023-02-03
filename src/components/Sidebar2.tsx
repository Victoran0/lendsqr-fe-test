import React from 'react'
import signout from '../images/signout.png';
import Navbar from './Navbar';

import systemMsg from '../images/systemMsg.png';
import '../styles/sidebar.scss'
import audit from '../images/audit.png'
import dashboard from '../images/dashboard.png'
import decision from '../images/decision.png'
import realdropdown from '../images/Realdropdown.png'
import fees from '../images/fees.png'
import guarantors from '../images/guarantors.png'
import karma from '../images/karma.png'
import loanprodiucts from '../images/loanprodiucts.png'
import loanrequest from '../images/loanrequest.png'
import loans from '../images/loans.png'
import organization from '../images/organization.png'
import preferences from '../images/preferences.png'
import reports from '../images/reports.png'
import savings from '../images/savings.png'
import savingsproduct from '../images/savingsproduct.png'
import serviceaccount from '../images/serviceaccount.png'
import pricing from '../images/pricing.png'
import settlements from '../images/settlements.png'
import users from '../images/users.png'
import whitelist from '../images/whitelist.png'
import galaxy from '../images/galaxy.png'
import slider from '../images/slider.png'

const Sidebar2 = () => {
    return (
        <div className='sidebar'>
            <div className='switch'>
                <img width='16px' height='18px' src={organization} alt="Switch Organization" />
                <span >Switch Organization 
                <img width='14px' height='11px' src={realdropdown} alt="dropdwon" />
                    </span> 
            </div>
            <span className='dashboard'>
                <img  width='16px' height='14.22px' src={dashboard} alt="dashboard" />
                Dashboard 
            </span>
            <p>CUSTOMERS</p>
            <span>
                <img width='16px' height='12.8px' src={users} alt="users" />
                Users 
            </span>
            <span>
                <img width='16px' height='12.8px' src={guarantors} alt="guarantors" />
                Guarantors 
            </span>
            <span>
                <img width='16px' height='12.8px' src={loans} alt="loans" />
            Loans 
            </span>
            <span>
                <img width='16px' height='12.8px' src={decision} alt="decision" />
            Decision Models
            </span>
            <span>
                <img src={savings} width='16px' height='12.8px' alt="savings" />
            Savings 
            </span>
            <span>
                <img width='16px' height='12.8px' src={loanrequest} alt="loanrequest" />
            Loan Requests 
            </span>
            <span>
                <img src={whitelist} alt="whitelist" width='16px' height='12.8px' />
            Whitelist 
            </span>
            <span>
                <img src={karma} alt="karma" width='16px' height='12.8px' />
            Karma 
            </span>
            <p>BUSINESSES</p>
            <span>
                <img width='16px' height='16px' src={organization} alt="organization" />
            Organization 
            </span>
            <span>
                <img src={loanprodiucts} width='16px' height='16px' alt="loanproducts" />Loan Products 
            </span>
            <span>
                <img width='16px' height='16px' src={savingsproduct} alt="Savings Products" />Savings Products 
            </span>
            <span>
                <img src={fees} alt="fees and charges" width='16px' height='16px' />Fees and Charges
            </span>
            <span>
                <img src={preferences} width='16px' height='16px' alt="transactions" />Transactions
            </span>
            <span>
                <img src={galaxy} width='16px' height='16px' alt="services" />Services
            </span>
            <span>
                <img width='16px' height='16px' src={serviceaccount} alt="serviceaccount" />Service Account
            </span>
            <span>
                <img src={settlements} width='16px' height='16px' alt="settlements" />Settlements
            </span>
            <span>
                <img src={reports} width='16px' height='16px' alt="reports" />Reports
            </span>
            <p>SETTINGS</p>
            <span>
                <img width='16px' height='16px' src={slider} alt="preferences" />Preferences
            </span>
            <span>
                <img src={pricing} alt="fees" width='16px' height='16px' />Fees and Pricing
            </span>
            <span>
                <img src={audit} width='16px' height='21.33px' alt="audit" />Audit Logs
            </span>
            <span>
                <img src={systemMsg} width='16px' height='16px' alt="audit" />System Messages
            </span>
            <h4></h4>
            <span>
                <img src={signout} width='16px' height='16px' alt="audit" />Log out
            </span>
            <h5>v1.2.0</h5>
        </div>
    )
}

export default Sidebar2
