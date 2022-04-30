// Context
import { useAuthContext } from '../../hooks/useAuthContext'

// Components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

// Styles
import styles from './Home.module.css'

// Hooks
import { useCollection } from '../../hooks/useCollection'


function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
    )

  return (
    <div className={ styles['container'] }>
      <div className={ styles['content'] }>
        Transactions List
        {error && <p>{ error }</p>}
        {documents && <TransactionList transactions={ documents } />}
      </div>
      <div className={ styles['sidebar'] }>
        <TransactionForm uid={ user.uid } />
      </div>
    </div>
  )
}

export default Home
