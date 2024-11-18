import axios from 'axios'

const regForm = document.getElementById('registrationForm')

regForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(regForm)

    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
    }
})

const homepage = async () => {
    const response = await axios.get('http://localhost:3000')

    console.log(response.data)
}

homepage()