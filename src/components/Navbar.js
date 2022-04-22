import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { useLogout } from '../hooks/useLogout'

function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className={ styles.navbar }>
      <ul>
        <li className={ styles.title }><Link to="/">FinanceTracker</Link></li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>

        <li><button className='btn' onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
