// Context
import { useAuthContext } from '../../hooks/useAuthContext'

// Components
import TransactionForm from './TransactionForm'

// Styles
import styles from './Home.module.css'


function Home() {
  const { user } = useAuthContext()

  return (
    <div className={ styles['container'] }>
      <div className={ styles['content'] }>
        Transaction List
      </div>
      <div className={ styles['sidebar'] }>
        <TransactionForm uid={ user.uid } />
      </div>
    </div>
  )
}

export default Home
