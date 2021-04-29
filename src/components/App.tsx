import styles from '../styles/components/App.module.css';
import UsersList from './UsersList';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>React Assessment Solution</h1>
      <UsersList />
    </div>
  );
}

export default App;
