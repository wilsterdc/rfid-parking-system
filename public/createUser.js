import React, { useState } from 'react'
import axios from 'axios'

const createUser = () => {
    const [formData, setFormData] = useState({
        userId: '',
        firstname: '',
        lastname: '',
        middlename: '',
        vehicleType: '',
        validity: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('http://localhost:3000/account', formData)
            console.log('[Register] ', response.data)
        } catch (error) {
            console.error('Error', error.message)
        }
    }
}

return (
    <div>
        <h1>
            Register RFID
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID:</label>
                <input type='text' name='userId' value={formData.userId} onChange={handleChange} required />
            </div>
            <div>
                <label>Firstname: </label>
                <input type='text' name='firstname' value={formData.firstname} onChange={handleChange} required />
            </div>
            <div>
                <label>Lastname: </label>
                <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} required />
            </div>
            <div>
                <label>Middlename: </label>
                <input type='text' name='middlename' value={formData.middlename} onChange={handleChange} />
            </div>
            <div>
                <label>Vehicle Type: </label>
                <input type='text' name='vehicleType' value={formData.vehicleType} onChange={handleChange} required />
            </div>
            <div>
                <label>Validity: </label>
                <input type='text' name='validity' value={formData.validity} onChange={handleChange} required />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
)

export default createUser