import styles from './styles.module.scss';
import CounterContainer from '../Counter/containers/CounterContainer';


function App() {
  return (
    <div className={styles.container}>
      <CounterContainer/>
    </div>
  );
}

export default App;
