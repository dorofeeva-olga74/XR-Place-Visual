import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Layout>
        <Widget />
        <Projects />
        <Team />
        <Claim />
      </Layout>
    </>
  );
}

export default App;
