import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import register from './createUser'
import renew from './renewAccount'

const app = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/'>
                        <button>Register</button>
                    </Link>
                    <Link to='./renew-account'>
                       <button>Renew</button> 
                    </Link>
                </nav>

                <hr />

                <Routes>
                    <Route path='/' element={<register />} />
                    <Route path='/renew-account' element={<renew />} />
                </Routes>
            </div>
        </Router>
    )
}

export default app