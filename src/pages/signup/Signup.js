import { useState, useRef } from 'react'
import styles from './Signup.module.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const focusRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(displayName, email, password)

    // Reset values
    setDisplayName('')
    setEmail('')
    setPassword('')

    focusRef.current.focus()
  }

  return (
    <form
      className={ styles['signup-form'] }
      onSubmit={ handleSubmit }
      >

      <h2>Sign Up</h2>

      {/* Display name */}
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={ e => setDisplayName(e.target.value) }
          value={ displayName }
          ref={ focusRef }
         />
      </label>

      {/* Email */}
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={ e => setEmail(e.target.value) }
          value={ email }
         />
      </label>


      {/* Password */}
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={ e => setPassword(e.target.value) }
          value={ password }
        />
      </label>

      <button className='btn'>Sign Up</button>

    </form>
  )
}

export default Signup
