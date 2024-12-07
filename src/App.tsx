import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Metrics from './components/Metrics/Metrics';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Layout>
        <Widget />
        <Projects />
        <Metrics />
        <Team />
        <Claim />
      </Layout>
    </>
  );
}

export default App;
