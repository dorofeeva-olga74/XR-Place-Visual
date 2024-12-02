import styles from './App.module.scss';
import Layout from './components/Layout/Layout';
import Team from './components/Team/Team';

function App() {
  return (
    <>
      <Layout>
        <p className={styles.title}>
          XR Place <br />
          победитель - Команда №2
        </p>
        <Team />
      </Layout>
    </>
  );
}

export default App;
