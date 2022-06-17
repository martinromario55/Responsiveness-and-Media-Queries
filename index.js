const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function setErrorFor(input) {
  const formControl = input.parentElement //.input-icon

  formControl.classList.add('error')
  formControl.classList.remove('success')
}

function setSuccessFor(input) {
  const inputControl = input.parentElement

  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}

function checkInputs() {
  // Get values from inputs
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const passwordValue = password.value.trim()
  const emailValue = email.value.trim()

  //   Check for valid input
  if (firstNameValue === '') {
    // Show Error
    // add Error Class
    setErrorFor(firstName)
  } else {
    // add success class
    setSuccessFor(firstName)
  }

  if (lastNameValue === '') {
    // Show Error
    // add Error Class
    setErrorFor(lastName)
  } else {
    // add success class
    setSuccessFor(lastName)
  }

  if (emailValue === '') {
    // Show Error
    // add Error Class
    setErrorFor(email)
  } else {
    // add success class
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    // Show Error
    // add Error Class
    setErrorFor(password)
  } else {
    // add success class
    setSuccessFor(password)
  }
}
