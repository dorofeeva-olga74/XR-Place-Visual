import styles from './App.module.scss';
import Layout from './components/Layout/Layout';
import WidgetSection from './components/WidgetSection/WidgetSection';

function App() {
  return (
    <>
      <Layout>
        <div>
          <p className={styles.title}>
            XR Place <br />
            победитель - Команда №2
          </p>
          <WidgetSection />
        </div>
      </Layout>
    </>
  );
}

export default App;
