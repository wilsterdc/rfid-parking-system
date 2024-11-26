import axios from 'axios'

const regForm = document.getElementById('registrationForm')

regForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(regForm)
    const body = {}

    for (const [key, value] of formData.entries()) {
        // console.log(`${key}: ${value}`)
        body[key] = value
    }

    register(body)
})

const register = async (body) => {
    const response = await axios.post('http://localhost:3000/account', body)

    if (response.data.success) {
        alert('User successfuly registered.')
    } else {
        alert(`${response.data.message}`)
    }
}