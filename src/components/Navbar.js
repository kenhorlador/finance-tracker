import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={ styles.navbar }>
      <ul>
        <li className={ styles.title }><Link to="/">FinanceTracker</Link></li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}

        {user && (
          <>
            <p>Hello, { user.displayName }</p>
            <li><button className='btn' onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
