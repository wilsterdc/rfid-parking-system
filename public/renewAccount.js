import React, { useState } from 'react'
import axios from 'axios'

const renewAccount = () => {
    const [formData, setFormData] = useState({
        userId: '',
        validity: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.get('http://localhost:3000/renew', formData)
            console.log('[Renewal] ', response.data)
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    return (
        <div>
            <h1>
                Account Renewal
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> User ID:</label>
                    <input type='text' name='userId' value={formData.userId} onChange={handleChange} required/>
                </div>
                <div>
                    <label> Validity:</label>
                    <input type='text' name='validity' value={formData.validity} onChange={handleChange} required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default renewAccount