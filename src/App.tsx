import styles from './App.module.scss';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <p className={styles.title}>
          XR Place <br />
          победитель - Команда №2
        </p>
      </Layout>
    </>
  );
}

export default App;
